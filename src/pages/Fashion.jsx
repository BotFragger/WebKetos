import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import "./Fashion.css";

function Fashion() {
    return (
    <>
     <div className='container'>
        <section className="cards mt-5">
          <article className="horizontal card">
            <img className="card-image gambar" src="./matahari_fashion.jpg" alt="" />
              <div className="card-content">
                <div className="card-type">article</div>
                  <div className="card-title">Test Post: Electric Boogaloo
        </div>
                  <div className="card-date">14 March 2011 &middot; <span className="card-time-to-read">5 min read</span></div>
                <div className="card-excerpt">text
        </div>
                  <div className="card-tags">
                <div className="tag"><i className="fa fa-tag"></i>test</div>
              <div className="tag"><i className="fa fa-tag"></i>test</div>
        </div>
        </div>
        </article>
                  <article className="vertical card">
                <img className="card-image gambar" src="./matahari_fashion.jpg" alt="" />
              <div className="card-content">
            <div className="card-type">article</div>
          <div className="card-title">
          Test Post: Electric Boogaloo
        </div>
                  <div className="card-date">14 March 2011 &middot; 5 min read</div>
                <div className="card-excerpt">
          This is a test article, in a perculiar context, to see whether grid and flexbox works to make a blog...
        </div>
                  <div className="card-tags">
                <div className="tag"><i className="fa fa-tag"></i>test</div>
              <div className="tag"><i className="fa fa-tag"></i>test</div>
        </div>
        </div>
        </article>
                  <article className="vertical card">
                <img className="card-image gambar" src="./matahari_fashion.jpg" alt="" />
              <div className="card-content">
            <div className="card-type">article</div>
          <div className="card-title">
          Test Post: Electric Boogaloo
        </div>
                  <div className="card-date">14 March 2011 &middot; 5 min read</div>
                <div className="card-excerpt">
          This is a test article, in a perculiar context, to see whether grid and flexbox works to make a blog...
        </div>
                  <div className="card-tags">
                <div className="tag"><i className="fa fa-tag"></i>test</div>
              <div className="tag"><i className="fa fa-tag"></i>test</div>
        </div>
        </div>
    </article>
                  <article className="vertical card">
                <img className="card-image" src="./matahari_fashion.jpg" alt="" />
              <div className="card-content">
            <div className="card-type">article</div>
          <div className="card-title">
          Test Post: Electric Boogaloo
        </div>
                  <div className="card-date">14 March 2011 &middot; 5 min read</div>
                <div className="card-excerpt">
          This is a test article, in a perculiar context, to see whether grid and flexbox works to make a blog...
        </div>
                  <div className="card-tags">
                <div className="tag"><i className="fa fa-tag"></i>test</div>
              <div className="tag"><i className="fa fa-tag"></i>test</div>
        </div>
        </div>
        </article>
                  <article className="horizontal card">
                <img className="card-image gambar" src="./matahari_fashion.jpg" alt="" />
            <div className="card-content">
        <div className="card-type">article</div>
        <div className="card-title">
          Test Post: Electric Boogaloo
        </div>
        <div className="card-date">14 March 2011 &middot; 5 min read</div>
        <div className="card-excerpt">
          This is a test article, in a perculiar context, to see whether grid and flexbox works to make a blog...
        </div>
        <div className="card-tags">
          <div className="tag"><i className="fa fa-tag"></i>test</div>
          <div className="tag"><i className="fa fa-tag"></i>test</div>
        </div>
      </div>
    </article>
    <article className="vertical card">
      <img className="card-image gambar" src="./matahari_fashion.jpg" alt="" />
      <div className="card-content">
        <div className="card-type">article</div>
        <div className="card-title">
          Test Post: Electric Boogaloo
        </div>
        <div className="card-date">14 March 2011 &middot; 5 min read</div>
        <div className="card-excerpt">
          This is a test article, in a perculiar context, to see whether grid and flexbox works to make a blog...
        </div>
        <div className="card-tags">
          <div className="tag"><i className="fa fa-tag"></i>test</div>
          <div className="tag"><i className="fa fa-tag"></i>test</div>
        </div>
      </div>
    </article>
  </section>
  </div>
</>

    )
}

export default Fashion
