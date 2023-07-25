import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';
import CategoryDetail from './CategoryDetailComponent';

class Category extends Component {
    static contextType = MyContext; // using this.context to access global state
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            itemSelected: null,
        };
    }
    render() {
        const cates = this.state.categories.map((item) => {
            return (
                <tr key={item._id} className="datatable" onClick={() => this.trItemClick(item)}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                </tr>
            );
        });
        return (
            <div className="app__container">
                <div className="grid wide">
                    <div className="row sm-gutter app__content">
                        <div className="col l-12 m-12 c-12">
                        <div className="float-left">
                            <h2 className="text-center">CATEGORY LIST</h2>
                            <table className="category_body" border="1">
                                <tbody className="tbody">
                                    <tr className="datatable">
                                        <th>ID</th>
                                        <th>Name</th>
                                    </tr>
                                    {cates}
                                </tbody>
                            </table>
                        </div>
                        <div className="inline" />
                        <CategoryDetail item={this.state.itemSelected} updateCategories={this.updateCategories} />
                        <div className="float-clear" />
                    </div>
                </div>
            </div>
            </div>
        );
    }
    updateCategories = (categories) => {
        // arrow-function
        this.setState({ categories: categories });
    };
    componentDidMount() {
        this.apiGetCategories();
    }
    // event-handlers
    trItemClick(item) {
        this.setState({ itemSelected: item });
    }
    // apis
    apiGetCategories() {
        const config = { headers: { 'x-access-token': this.context.token } };
        axios.get('/api/admin/categories', config).then((res) => {
            const result = res.data;
            this.setState({ categories: result });
        });
    }
}
export default Category;
