import { createGlobalStyle } from 'styled-components'

const DrawerGlobalStyle = createGlobalStyle`
.drawer-handle {
  position: relative;
  z-index: 501;
  width: 30px;
  height: 35px;
  cursor: pointer;
}

.drawer-handle span {
  position: absolute;
  cursor: pointer;
  height: 2px;
  width: 30px;
  background: #06102a;
  display: block;
  content: "";
  top: 0;
}

.drawer-handle span::before, .drawer-handle span::after {
  cursor: pointer;
  height: 2px;
  width: 30px;
  background: #06102a;
  position: absolute;
  display: block;
  content: "";
  top: 0;
}

.drawer-handle span.second {
  top: 7px;
}

.drawer-handle span {
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.drawer-handle span::after {
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  top: 14px;
}

.drawer-handle span::before {
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  top: 7px;
}

.drawer-handle.open span {
  transform: rotate(45deg);
  top: 10px;
  background: #06102a;
}

.drawer-handle.open span::before {
  background-color: transparent;
}

.drawer-handle.open span::after {
  background: #06102a;
  transform: rotate(90deg);
  top: 0;
}

.drawer-menu {
  position: fixed;
  z-index: 101;
  transform: translateX(-150%);
  width: 30%;
  padding-top: 52px;
  transition: 400ms;
  text-align: left;
  font-family: Rubik, sans-serif;
  font-weight: 400;
  background: white;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 35vw;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  visibility: hidden;
  overflow-y: scroll;
}

.drawer-menu ul.nav {
  list-style: none;
  padding: 0;
}

.drawer-menu .menu-item {
  color: #06102a;
  display: block;
  padding: 18px 20px;
  font-size: 16px;
  font-weight: 500;
}

.menu-item .menu-item__title{
  position: relative;
}

.menu-item .menu-item__title .icon-wrapper{
  position: absolute;
  top: -6px;
  right: -4px;
  width: 8px;
  height: 8px;
}

.drawer-menu .menu-item:hover {
  background: #efefef;
}

.drawer-menu .menu-item.active {
  background: #efefef;
  border-left: 5px solid #1e54d5;
  padding-left: 15px;
}

.drawer-menu .menu-item--with-icon {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
}

.drawer-menu .menu-item--with-icon .title {
  display: block;
  margin-right: 3px;
}

.drawer-menu .menu-item--with-icon .icon {
  display: block;
  transition: all 0.1s;
}

.drawer-menu .menu-item-wrapper--expandable .sub-menu {
  display: none;
}

.drawer-menu .menu-item-wrapper--expandable .sub-menu a {
  color: #06102a;
  display: block;
  padding: 18px 20px;
  font-size: 16px;
}

.drawer-menu .menu-item-wrapper--expandable .sub-menu a:hover {
  background: #efefef;
}

.drawer-menu .menu-item-wrapper--expandable .sub-menu a.active {
  background: #efefef;
  border-left: 5px solid #1e54d5;
  padding-left: 15px;
}

.drawer-menu .menu-item-wrapper--expandable.open {
  background: whitesmoke;
}

.drawer-menu .menu-item-wrapper--expandable.open .sub-menu {
  display: block;
}

.drawer-menu .menu-item-wrapper--expandable.open .menu-item .icon {
  transform: rotate(180deg);
}

.drawer-menu.open {
  transform: translateX(0%);
  visibility: visible;
}

@media (max-width: 750px) {
  .drawer-menu {
    width: 70%;
    width: 70vw;
  }
}

@media (min-width: 1150px) {
  .drawer-menu {
    display: none;
  }
}
`

export default DrawerGlobalStyle
