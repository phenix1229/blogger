import React , {Component} from 'react';
import blogs from '../data/data';
import Search from '../components/Search';
import CreateBlog from '../components/CreateBlog';
import Blogs from './Blogs';

class App extends Component {
    constructor(){
        super()
        this.state = {
            blogs,
            searchTerm: ''
        };
        this.onDelete = this.onDelete.bind(this);
    };
    onDelete(id){
        const updatedBlogs = this.state.blogs.filter((item => item.objectId !== id));
        this.setState({blogs:updatedBlogs});
    };
    onUpdate(id){
        console.log(`Update : ${id}`)
    };
    handleChange = (event) => {
        this.setState({searchTerm:event.target.value}, ()=> {
            console.log(this.state.searchTerm)
        })
    };
    handleCreateBlogSubmit = (event,blog) => {
        event.preventDefault();
        let updatedBlogs=[blog, ...this.state.blogs];
        this.setState({blogs: updatedBlogs}, () => {
            console.log(this.state.blogs)
        })
    };
    render () {
        return (
            <div style={{
                marginTop:'100px',
                display:'flex', 
                justifyContent:'center', 
                alignItems: 'center', 
                flexDirection:'column'
            }}>
                <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm} />
                <CreateBlog handleCreateBlogSubmit={this.handleCreateBlogSubmit} />
                <Blogs blogs={this.state.blogs} searchTerm={this.state.searchTerm} onDelete={this.onDelete} onUpdate={this.onUpdate} />
            </div>
        )
    };
};

export default App;