import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

import styles from './blogs.module.scss';

class Blogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            blogs: []
        };
    }

    componentWillUnmount() {
        this.setState({
            loading: false
        });
    }
    componentDidMount() {
        this.setState({
            loading: true
        });
        fetch("http://localhost:9000/blogs", {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => this.setState({ blogs: response }),
                this.setState({ loading: false }))
            .catch(error => error)
    }

    render() {
        return (
            <section className={`${styles.launches} layout-l`}>
                {this.state.loading && <Loader type="Oval" color="#000000" height={40} width={40} />}
                {this.state.blogs.length === 0 ? <p className={styles.emptyContainer}>There are no blogs to be displayed</p> :
                    <section className={styles.blogs}>
                        {this.state.blogs.map((item) => {
                            return (
                                <div className={styles.thumbnail}>
                                    <div className={styles.tags}>{item.blog_tags}</div>

                                    <div className={styles.title}>{item.blog_title}</div>
                                    <a href={item.blog_links && item.blog_links.article_link}>
                                        <div className={styles.details}>{item.blog_details}</div>
                                    </a>

                                </div>
                            )
                        })
                        }
                    </section>
                }
            </section>
        );
    }

}

export default Blogs;
