import React from 'react';

let blogs = [
    {
      title: 'Is Ebola Worse?',
      author: 'John Peters',
      subject: 'news',
      article:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
      objectId: '1'
    },
    {
      title: 'What to do in isolation',
      author: 'Wanda Simon',
      subject: 'news',
      article:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
      objectId: '2'
    },
    {
      title: 'My Plants are Dying',
      author: 'Lucy Grand',
      subject: 'outdoors',
      article:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
      objectId: '3'
    },
    {
      title: 'Stuck in A Room',
      author: 'Burke Ginsen',
      subject: 'news',
      article:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
      objectId: '4'
    },
    {
      title: 'Outside My Window',
      author: 'Laura Nivers',
      subject: 'outdoors',
      article:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
      objectId: '5'
    }
];


class Blogs extends React.Component {
    constructor(){
        super();
        this.state = {
            blogs,
        };
        this.onDelete = this.onDelete.bind(this)
    }
    onDelete = (id) => {
        const updatedBlogs = this.state.blogs.filter((item) => item.objectId !== id)
        this.setState({blogs: updatedBlogs})
    }

    render() {
        return (
            <div style={{marginTop:'100px', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                {this.state.blogs.map((blog, idx) => {
                    return (
                        <div key={blog.objectId} className='ui card' style={{width:'75%', padding:'20px'}}>
                            <div className='content'>
                                <div className='header'>{blog.title}</div>
                                <br />
                                <div className='meta'>Author: {blog.author}</div>
                                <hr />
                                <div className='description'>
                                    {blog.article}
                                </div>
                                <button className='ui primary button' style={{margin:'10px 15px'}} onClick={() => {
                                    this.onDelete(blog.objectId)
                                }}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Blogs;