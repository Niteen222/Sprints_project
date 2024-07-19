import React from 'react';

function Second() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg d-flex align-items-center bg-white">
                <div className="container-fluid">
                    <h6 className="navbar">Last task completed on Sep 30</h6>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <form className="d-flex flex-wrap gap-4 mx-2 cursor" role="search">
                            <p className="all"><i className="fa-regular fa-circle-check"></i> All tasks</p>
                            <p className="all"><i className="fa-solid fa-arrow-up-wide-short"></i> Filter</p>
                            <p className="all"><i id="top" className="fa-solid fa-right-left"></i> Sort</p>
                            <p className="all"><i className="fa-solid fa-bolt"></i> Rules</p>
                            <p className="all"><i id="field" className="fa-solid fa-mobile-screen"></i> Fields</p>
                            <p className="all">More<i className="fa-solid fa-ellipsis"></i></p>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Second;
