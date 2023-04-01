import React from 'react'
import "./style.css"
const NewsLetter = () => {
  return (
    <>
        {/* ----------------------- */}
        <div className="newslatter-area pd-top-120">
            <div className="container newsletter-container">
                <div className="newslatter-area-wrap border-tp-solid">
                    <div className="row newsletter-row">
                        <div className="col-xl-3 col-lg-6 col-md-5 offset-xl-2">
                            <div className="section-title mb-md-0">
                                <h2 className='title'>Newsletter</h2>
                                <p>Sign up to receive the best offers</p>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-7 align-self-center offset-xl-1">
                            <form>
                            <div class="input-group newslatter-wrap">
                                <div className="input-group-prepend">
                                    <span className='input-group-text'>
                                    <i class="fa-solid fa-envelope"/>
                                    </span>
                                </div>
                                <input className='form-control' type="email" name="email" id="email" placeholder='Email'/>
                                <div class="input-group-append">
                                <input type="submit" class="btn btn-yellow vaijesubmit" value="Subscribe"/>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewsLetter