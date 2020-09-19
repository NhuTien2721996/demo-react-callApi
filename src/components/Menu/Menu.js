import React from 'react';
import {Route,Link} from 'react-router-dom';

function Menu() {
    const menus=[
        {
            name:"Trang chủ",
            to:"/",
            exact:true
        },{
            name:"Quản lý sản phẩm",
            to:"/product-list",
            exact: false
        }
    ];

    const MenuLink=({label,to,activeOnlyWhenExact})=>{
        return(
            <Route
                path={to}
                exact={activeOnlyWhenExact}
                children={({match})=>{
                    let active=match? "active":"";
                    return (
                        <li className={active}>
                            <Link to={to}>
                                {label}
                            </Link>
                        </li>
                    )
                }}
            />
        )
    };
    function showMenus(menus) {
        let result=null;
        if (menus.length>0){
            result=menus.map((menu,index)=>{
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            })
        }
        return result;
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {showMenus(menus)}
                </ul>
            </div>
        </nav>
    );
}

export default Menu;
