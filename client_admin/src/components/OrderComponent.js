import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';

class Order extends Component {
    static contextType = MyContext; // using this.context to access global state
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            order: null,
        };
    }
    render() {
        const orders = this.state.orders.map((item) => {
            return (
                <tr key={item._id} className="datatable" onClick={() => this.trItemClick(item)}>
                    <td>{item._id}</td>
                    <td>{new Date(item.cdate).toLocaleString()}</td>
                    <td>{item.customer.name}</td>
                    <td>{item.customer.phone}</td>
                    <td>{item.total}.000đ</td>
                    <td>{item.status}</td>
                    <td>
                        {item.status === 'PENDING' ? (
                            <div>
                                <span className="link" onClick={() => this.lnkApproveClick(item._id)}>
                                    APPROVE
                                </span>{' '}
                                ||{' '}
                                <span className="link" onClick={() => this.lnkCancelClick(item._id)}>
                                    CANCEL
                                </span>
                            </div>
                        ) : (
                            <div />
                        )}
                    </td>
                </tr>
            );
        });
        if (this.state.order) {
            var items = this.state.order.items.map((item, index) => {
                return (
                    <tr key={item.product._id} className="datatable">
                        <td>{index + 1}</td>
                        <td>{item.product._id}</td>
                        <td>{item.product.name}</td>
                        <td>
                            <img
                                src={'data:image/jpg;base64,' + item.product.image}
                                width="70px"
                                height="70px"
                                alt=""
                            />
                        </td>
                        <td>{item.product.price}.000đ</td>
                        <td>{item.quantity}</td>
                        <td>{item.product.price * item.quantity}.000đ</td>
                    </tr>
                );
            });
        }
        return (
            <div className="app__container container__main ">
                <div className="grid wide">
                    <div className="row sm-gutter app__content style-product-Detail">
                        <div className="col l-12 m-12 c-12">
                            <div>
                                <div className="align-center">
                                    <h2 className="text-center">ORDER LIST</h2>
                                    <table className="datatable" border="1">
                                        <tbody className="tbody">
                                            <tr className="datatable">
                                                <th className="tbody_id">ID</th>
                                                <th className="tbody_date">Creation date</th>
                                                <th className="tbody_custname ">Cust.name</th>
                                                <th className="tbody_phone">Cust.phone</th>
                                                <th className="tbody_total">Total</th>
                                                <th className="tbody_status">Status</th>
                                                <th className="tbody_action">Action</th>
                                            </tr>
                                            {orders}
                                        </tbody>
                                    </table>
                                </div>
                                {this.state.order ? (
                                    <div className="align-center">
                                        <h2 className="text-center">ORDER DETAIL</h2>
                                        <table className="datatable" border="1">
                                            <tbody className="tbody">
                                                <tr className="datatable">
                                                    <th>No.</th>
                                                    <th>Prod.ID</th>
                                                    <th>Prod.name</th>
                                                    <th>Image</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Amount</th>
                                                </tr>
                                                {items}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <div />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    // event-handlers
    lnkApproveClick(id) {
        this.apiPutOrderStatus(id, 'APPROVED');
    }
    lnkCancelClick(id) {
        this.apiPutOrderStatus(id, 'CANCELED');
    }
    // apis
    apiPutOrderStatus(id, status) {
        const body = { status: status };
        const config = { headers: { 'x-access-token': this.context.token } };
        axios.put('/api/admin/orders/status/' + id, body, config).then((res) => {
            const result = res.data;
            if (result) {
                this.apiGetOrders();
            } else {
                alert('SORRY BABY!');
            }
        });
    }

    componentDidMount() {
        this.apiGetOrders();
    }
    // event-handlers
    trItemClick(item) {
        this.setState({ order: item });
    }
    // apis
    apiGetOrders() {
        const config = { headers: { 'x-access-token': this.context.token } };
        axios.get('/api/admin/orders', config).then((res) => {
            const result = res.data;
            this.setState({ orders: result });
        });
    }
}
export default Order;
