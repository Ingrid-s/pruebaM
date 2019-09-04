import React from 'react';

function Header() {
  return (
    <div>
     <div className="gradient">
        <div className="gradient__menu">
                <div className="dropdown">
                        <button className="btn  dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-cog icon"></i>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                          <button className="dropdown-item" type="button">Action</button>
                          <button className="dropdown-item" type="button">Another action</button>
                        </div>
                      </div>
                    <div className="gradient__icon">
                        <i className="far fa-bell bell"></i>
                    </div>
        </div>
        
    </div>
    </div>
  );
}

export default Header;
