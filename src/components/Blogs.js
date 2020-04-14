import React  from 'react'
import {searchIt} from '../services/search';
import BlogItem from '../components/BlogItem'

const Blogs = (props) => {
  return (
    <div>
      {props.blogs
      .filter(searchIt(props.searchTerm))
      .map((blog,idx)=>{
        return (
          <BlogItem  key={blog.objectId} onDelete={props.onDelete} onUpdate={props.onUpdate} blog={blog} />
        )
      })}
    </div>
  )
};

export default Blogs;