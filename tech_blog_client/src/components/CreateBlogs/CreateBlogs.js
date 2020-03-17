import React from '../../../node_modules/react';
import styles from './createblogs.module.scss';
import axios from 'axios';

class CreateBlogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: '',
            tags: '',
            links: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputChangedHandler = this.inputChangedHandler.bind(this);
    }

    handleSubmit(event) {
        console.log("Started");
        event.preventDefault();
        var data = {
            blog_post_date: new Date(),
            blog_links: {
                article_link: this.state.links,
            },
            blog_tags: this.state.tags,
            blog_title: this.state.title,
            blog_details: this.state.desc
        };
        console.log("Middle");

        // used axios to demonstrate knowledge of it. used fetch in get.
        axios.post('http://localhost:9000/blogs', data).then(res => {
            alert("Blog successfully created!");
            this.setState(
                {
                    title: '',
                    desc: '',
                    tags: '',
                    links: ''
                }
            )
        });
    };


    handleTitleChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    inputChangedHandler(event) {
        const { name, value } = event.target;
        if (name === "blogTitle") {
            this.setState({ title: value })
        } else if (name === "blogDesc") {
            this.setState({ desc: value })
        } else if (name === "blogTags") {
            this.setState({ tags: value })
        } else if (name === "blogLinks") {
            this.setState({ links: value })
        }
    }

    render() {

        const s = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>New Blog</label>
                <input type="text" name="blogTitle" placeholder="Enter blog title..." required value={this.state.title} onChange={this.inputChangedHandler} />
                <textarea className={styles.desc} name="blogDesc" required value={this.state.desc} onChange={this.inputChangedHandler}></textarea>
                <input type="text" name="blogTags" required value={this.state.tags} onChange={this.inputChangedHandler} />
                <input type="text" name="blogLinks" required value={this.state.links} onChange={this.inputChangedHandler} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default CreateBlogs;
