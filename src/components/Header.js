import React from 'react';

function Header() {
  return (
    <div>
     <div class="gradient">
        <div class="gradient__menu">
                <div class="dropdown">
                        <button class="btn  dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-cog icon"></i>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                          <button class="dropdown-item" type="button">Action</button>
                          <button class="dropdown-item" type="button">Another action</button>
                        </div>
                      </div>
                    <div class="gradient__icon">
                        <i class="far fa-bell bell"></i>
                    </div>
        </div>
        
    </div>
    </div>
  );
}

export default Header;
