import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import BlogCard from '../common/BlogCard'

export default function Blog() {
    return (
        <>
            <Header />
            <section className="container-fluid blog-main">
                <div className="container main-section">
                    <div className="row">
                        <div className="page-headline">
                            <h1 className='fw-bold'>Blog</h1>
                            <p>
                            Explore a world of knowledge and inspiration on topics ranging from travel to technology in our diverse blog.
                            </p>
                        </div>
                    </div>
                    <div className="row gy-4">
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
