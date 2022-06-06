import React from 'react';
import AppCodeHighlight from '../AppCodeHighlight';

const Documentation = () => {

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card docs">
                <h4>Current Version</h4>
                    <p>React 17.x and PrimeReact 7.x</p>

                    <h4>Getting Started</h4>
                    <p>Ultima is an application template for React, based on the popular <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a> that allows
                            creating React apps with no configuration. To get started extract the contents of the zip bundle and install the dependencies
                            with npm or yarn.</p>
<AppCodeHighlight>
{`
"npm install" or "yarn"
`}
</AppCodeHighlight>

                    <p>The following command needs to be run to create the css files in the sample project.
                        Note: Users can automatically run scss files without using this command by moving the theme file they want to use in their own projects under the src folder.
                    <a href="https://create-react-app.dev/docs/adding-a-sass-stylesheet/"> Details</a></p>
<AppCodeHighlight>
{`
sass public/assets:public/assets --no-source-map
`}
</AppCodeHighlight>

                    <p>Next step is running the application using the start script and navigate to <b>http://localhost:3000/</b> to view the application.</p>

<AppCodeHighlight>
{`
"npm start" or "yarn start"
`}
</AppCodeHighlight>
                    <p>That is it, you may now start with the development of your application using the Ultima template.</p>

                    <h4>React Scripts</h4>
                    <p>Following commands are derived from create-app-app.</p>
<AppCodeHighlight>
{`
"npm start" or "yarn start": Starts the development server
"npm test" or "yarn test": Runs the tests.
"npm run build" or "yarn run build": Creates a production build.
`}
</AppCodeHighlight>

                    <h4>Structure</h4>
                    <p>Ultima consists of 3 main parts; the application layout, layout resources and theme resources for PrimeReact components. <b>App.js</b> inside src folder is the main component containing the template for the base layout
                            whereas required resources for the layout are placed inside the <b>public/assets/layout</b> folder and similarly theme resources are inside <b>public/assets/theme</b> folder.
                        </p>

                    <h4>Template</h4>
                    <p>Main layout is the JSX of the App.js, it is divided into a couple of child components such as topbar, profile, menu and footer. Here is render method of the
                    App.js component that implements the logic such as menu state, layout modes and so on.
                        </p>

<AppCodeHighlight>
{`
<div className={layoutContainerClassName} onClick={onDocumentClick}>
    <AppTopbar horizontal={isHorizontal()}
        activeTopbarItem={activeTopbarItem}
        onMenuButtonClick={onMenuButtonClick}
        onTopbarItemClick={onTopbarItemClick}
        onRightMenuButtonClick={onRightMenuButtonClick}
        onMobileTopbarButtonClick={onMobileTopbarButtonClick} mobileTopbarActive={mobileTopbarActive} />

    <div className="menu-wrapper" onClick={onMenuClick}>
        <div className="layout-menu-container">
            {(inlineMenuPosition === 'top' || inlineMenuPosition === 'both') && <AppInlineMenu menuKey="top" inlineMenuActive={inlineMenuActive} onInlineMenuClick={onInlineMenuClick} horizontal={isHorizontal()} />}
            <AppMenu model={menu} onMenuItemClick={onMenuItemClick} onRootMenuItemClick={onRootMenuItemClick}
                menuMode={menuMode} active={menuActive} />
            {(inlineMenuPosition === 'bottom' || inlineMenuPosition === 'both') && <AppInlineMenu menuKey="bottom" inlineMenuActive={inlineMenuActive} onInlineMenuClick={onInlineMenuClick} horizontal={isHorizontal()} />}
        </div>
    </div>

    <div className="layout-main">

        <AppBreadcrumb menu={menu} />

        <div className="layout-content">
            //routers
        </div>

        <AppFooter colorMode={colorMode} />

    </div>

    <AppConfig inputStyle={inputStyle} onInputStyleChange={onInputStyleChange}
        rippleEffect={ripple} onRippleEffect={onRipple}
        menuMode={menuMode} onMenuModeChange={onMenuModeChange}
        inlineMenuPosition={inlineMenuPosition} onInlineMenuPositionChange={onInlineMenuPositionChange}
        colorMode={colorMode} onColorModeChange={onColorModeChange}
        menuTheme={menuTheme} onMenuThemeChange={onMenuThemeChange}
        topbarTheme={topbarTheme} onTopbarThemeChange={onTopbarThemeChange}
        theme={theme} onThemeChange={onThemeChange}
        onInputStyleClick={onInputStyleClick}
        isRTL={isRTL} onRTLChange={onRTLChange} />

    <AppRightMenu rightMenuActive={rightMenuActive} onRightMenuButtonClick={onRightMenuButtonClick} />

    {mobileMenuActive && <div className="layout-mask modal-in"></div>}
</div>
`}
</AppCodeHighlight>

                    <h4>Menu</h4>
                    <p>Menu is a separate component defined in <i>AppMenu.js</i> file based on PrimeReact MenuModel API. In order to define the menuitems,
                    navigate to data section of <i>App.js</i> file and define your own model as a nested structure using the menu property.
                    Here is the menu component from the demo application. Notice that menu object is bound to the model property of AppMenu component as shown above.</p>

<div style={{ overflow: 'auto', height: '400px' }}>
<AppCodeHighlight lang="js">
{`
const menu = [
    {
        label: 'Favorites', icon: 'pi pi-fw pi-home',
        items: [
            { label: 'Dashboard Sales', icon: 'pi pi-fw pi-home', to: '/', badge: '4', badgeClassName: 'p-badge-info' },
            { label: 'Dashboard Analytics', icon: 'pi pi-fw pi-home', to: '/favorites/dashboardanalytics', badge: '2', badgeClassName: 'p-badge-success' },
        ]
    },
    {
        label: 'UI Kit', icon: 'pi pi-fw pi-star-fill',
        items: [
            { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/uikit/formlayout', badge: '6', badgeClassName: 'p-badge-warning' },
            { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/uikit/input', badge: '6', badgeClassName: 'p-badge-danger' },
            { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', to: '/uikit/floatlabel' },
            { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', to: '/uikit/invalidstate' },
            { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/uikit/button', className: 'rotated-icon' },
            { label: 'Table', icon: 'pi pi-fw pi-table', to: '/uikit/table', badge: '6', badgeClassName: 'p-badge-help' },
            { label: 'List', icon: 'pi pi-fw pi-list', to: '/uikit/list' },
            { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/uikit/tree' },
            { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/uikit/panel' },
            { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/uikit/overlay' },
            { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/uikit/menu' },
            { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/uikit/message' },
            { label: 'File', icon: 'pi pi-fw pi-file', to: '/uikit/file' },
            { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/uikit/chart' },
            { label: 'Misc', icon: 'pi pi-fw pi-circle', to: '/uikit/misc' },
        ]
    },
    {
        label: "PrimeBlocks", icon: "pi pi-building",
        items: [
            { label: "Free Blocks", icon: "pi pi-eye", to: "/primeblocks/blocks", badge: "NEW", badgeStyle: {style: '40%'} },
            { label: "All Blocks", icon: "pi pi-globe", url: "https://www.primefaces.org/primeblocks-react", target: "_blank" }
        ]
    },
    {
        label: 'Utilities', icon: 'pi pi-fw pi-compass',
        items: [
            { label: 'Icons', icon: 'pi pi-fw pi-prime', to: '/utilities/icons' },
            { label: "PrimeFlex", icon: "pi pi-fw pi-desktop", url: "https://www.primefaces.org/primeflex", target: "_blank" }
        ]
    },
    {
        label: 'Pages', icon: 'pi pi-fw pi-briefcase',
        items: [
            { label: 'Crud', icon: 'pi pi-fw pi-pencil', to: '/pages/crud' },
            { label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', to: '/pages/calendar' },
            { label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/pages/timeline' },
            {
                label: 'Landing', icon: 'pi pi-fw pi-globe', badge: '2', badgeClassName: 'p-badge-warning',
                items: [
                    { label: 'Static', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank' },
                    { label: 'Component', icon: 'pi pi-fw pi-globe', to: '/landing' }
                ]
            }, { label: 'Login', icon: 'pi pi-fw pi-sign-in', to: '/login' },
            { label: 'Invoice', icon: 'pi pi-fw pi-dollar', to: '/pages/invoice' },
            { label: 'Help', icon: 'pi pi-fw pi-question-circle', to: '/pages/help' },
            { label: 'Error', icon: 'pi pi-fw pi-times-circle', to: '/error' },
            { label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', to: '/notfound' },
            { label: 'Access Denied', icon: 'pi pi-fw pi-lock', to: '/access' },
            { label: 'Empty Page', icon: 'pi pi-fw pi-circle', to: '/pages/empty' }
        ]
    },
    {
        label: 'Hierarchy', icon: 'pi pi-fw pi-align-left',
        items: [
            {
                label: 'Submenu 1', icon: 'pi pi-fw pi-align-left',
                items: [
                    {
                        label: 'Submenu 1.1', icon: 'pi pi-fw pi-align-left',
                        items: [
                            { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-align-left' },
                            { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-align-left' },
                            { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-align-left' },
                        ]
                    },
                    {
                        label: 'Submenu 1.2', icon: 'pi pi-fw pi-align-left',
                        items: [
                            { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-align-left' },
                            { label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-align-left' }
                        ]
                    },
                ]
            },
            {
                label: 'Submenu 2', icon: 'pi pi-fw pi-align-left',
                items: [
                    {
                        label: 'Submenu 2.1', icon: 'pi pi-fw pi-align-left',
                        items: [
                            { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-align-left' },
                            { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-align-left' },
                            { label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-align-left' },
                        ]
                    },
                    {
                        label: 'Submenu 2.2', icon: 'pi pi-fw pi-align-left',
                        items: [
                            { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-align-left' },
                            { label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-align-left' }
                        ]
                    },
                ]
            }
        ]
    },
    {
        label: 'Start', icon: 'pi pi-fw pi-download',
        items: [
            { label: 'Documentation', icon: 'pi pi-fw pi-question', to: '/start/documentation' },
            { label: 'Buy Now', icon: 'pi pi-fw pi-shopping-cart', command: () => { window.location = "https://www.primefaces.org/store" } }
        ]
    }
];
`}
</AppCodeHighlight>
</div>
                    <p>Dependencies of Layout are listed below and needs to be added to package.json. Only required
                        dependency is PrimeReact where optional dependencies exist to enable certain components in PrimeReact.</p>

<AppCodeHighlight lang="js">
{`
"primereact": "...",                //required: PrimeReact components
"primeicons": "...",                //required: Icons
"primeflex": "..."                  //required: Grid system
`}
</AppCodeHighlight>
                    <h5>Topbar</h5>
                    <img src="assets/layout/images/doc/topbar-doc.jpg" alt="topbar" className="p-mb-3" style={{maxWidth: '60%'}}/>
                    <p>It is a separate component defined in AppTopbar.js file. This menu can be fully customized according to the application's needs.
                    There are special classes in the topbar to provide some interactions such as hover, expand/collapse state etc. The pseudo code is as follows.</p>
<AppCodeHighlight lang="js">
{`
<elementTag className="layout-topbar p-shadow-4">
    <elementTag className="layout-topbar-left">
        <elementTag className="layout-topbar-logo ">
            // custom implementation to add logo
        </elementTag>

        <elementTag className="layout-menu-button" onClick={props.onMenuButtonClick}>
            // custom implementation to add menu button
        </elementTag>

        <elementTag className="layout-topbar-mobile-button">
            // custom implementation to add mobile menu button
        </elementTag>
    </elementTag>

    <elementTag className={classNames('layout-topbar-right', { 'layout-topbar-mobile-active': props.mobileTopbarActive })}>
        <elementTag className="layout-topbar-actions-left">
            // custom implementation. Maybe, a megaMenu component can be added.
        </elementTag>
        <elementTag className="layout-topbar-actions-right">
            <elementTag className="layout-topbar-items">
                <elementTag className="layout-topbar-item layout-search-item">
                    <elementTag className="layout-topbar-action" onClick={() => props.onSearch(true)}>
                        // custom implementation
                    </elementTag>

                    <elementTag className="layout-search-panel p-inputgroup">
                        // custom implementation
                        <InputText ref={searchPanel} type="text" placeholder="Search" onKeyDown={onInputKeydown} />
                    </elementTag>

                </elementTag>
                // A unique class can be defined to keep track of the expanded/collapsed states of each item. For example, The 'custom-class' is defined for this item.
                <elementTag className="layout-topbar-item custom-class">
                    <elementTag className="layout-topbar-action" onClick={(event) => props.onTopbarItemClick({ originalEvent: event, item: 'custom-class' })}>
                        // custom implementation. Used to open this action panel.
                    </elementTag>

                    <CSSTransition classNames="p-toggleable" timeout={{ enter: 1000, exit: 450 }} in={props.activeTopbarItem === 'custom-class'} unmountOnExit>
                        <elementTag className="layout-topbar-action-panel">
                            <elementTag>
                                // custom implementation
                            </elementTag>
                            //OR
                            // The 'layout-topbar-action-item' class is defined so that an element can have hover state.
                            <elementTag className="layout-topbar-action-item">
                                // custom implementation
                            </elementTag>
                        </elementTag>
                    </CSSTransition>

                </elementTag>
            </elementTag>
        <elementTag>
    </elementTag>
</elementTag>
`}
</AppCodeHighlight>
                    <small className="muted-text">(* Note: The &lt;elementTag&gt; tag can be an html element or a component tag. It can be changed according to need.)</small>
                    <h5>Right Menu</h5>
                    <img src="assets/layout/images/doc/rightmenu-doc.jpg" alt="rightmenu" className="p-mb-3" style={{maxWidth: '60%', height: '300px'}}/>
                    <p>It is a separate component defined in AppRightMenu.js file based on PrimeReact <a href="https://primefaces.org/primereact/showcase/#/sidebar">Sidebar</a> component.
                    All properties of the sidebar component are available. The menu can be fully customized according to the application's needs.
                    There are special methods and classes in the right menu to provide some interactions. The pseudo code is as follows.</p>
<AppCodeHighlight lang="js">
{`
// in AppTopbar.js or elsewhere
<elementTag onClick={props.onRightMenuButtonClick}>
    // custom implementation
</elementTag>

// in AppRightMenu.js
<Sidebar visible={props.rightMenuActive} onHide={props.onRightMenuButtonClick} className="layout-rightmenu p-sidebar-sm">
    // custom implementation
</Sidebar>
`}
</AppCodeHighlight>
                    <small className="muted-text">(* Note: The &lt;elementTag&gt; tag can be an html element or a component tag. It can be changed according to need.)</small>
                    <h5>Inline Menu</h5>
                    <img src="assets/layout/images/doc/inlinemenu-doc.jpg" alt="rightmenu" className="p-mb-3" style={{maxWidth: '60%', height: '450px'}}/>
                    <p>It is a separate component defined in AppInlineMenu.js file. This menu can be fully customized according to the application's needs and it is created according to its location within the element with the layout-menu-container class.
                        There are special classes in the inline menu to provide some interactions. The pseudo code is as follows.</p>
<AppCodeHighlight lang="js">
{`
const inlineMenuClassName = classNames('layout-inline-menu', {
    'layout-inline-menu-active': props.inlineMenuActive[props.menuKey]
}, props.className);

<elementTag className={inlineMenuClassName} style={props.style}>
    <elementTag className="layout-inline-menu-action" onClick={(e) => props.onInlineMenuClick(e, menuKey)>
        // custom implementation
        <elementTag className="layout-inline-menu-icon"></elementTag> // custom icon
    </elementTag>

    <CSSTransition classNames="p-toggleable-content" timeout={{ enter: 1000, exit: 450 }} in={props.inlineMenuActive[menuKey]} unmountOnExit>
        <elementTag className="layout-inline-menu-action-panel">
            <elementTag className="layout-inline-menu-action-item">
                // custom implementation
            </elementTag>
        </elementTag>

</elementTag>
`}
</AppCodeHighlight>
                    <small className="muted-text">(* Note: The &lt;elementTag&gt; tag can be an html element or a component tag. It can be changed according to need.)</small>
<AppCodeHighlight lang="js">
{`
// in App.js
<elementTag className="layout-menu-container">
    <ApInlineMenu></AppInlineMenu> // It is created at the top of the menu
        <AppMenu></AppMenu>
    <AppInlineMenu></AppInlineMenu> // It is created at the bottom of the menu
</elementTag>
`}
</AppCodeHighlight>
                    <small className="muted-text">(* Note: The &lt;elementTag&gt; tag can be an html element or a component tag. It can be changed according to need.)</small>
                    <h5>Breadcrumb</h5>
                    <img src="assets/layout/images/doc/breadcrumb-doc.jpg" alt="breadcrumb" className="p-mb-3" style={{maxWidth: '60%'}}/>
                    <p>It is a separate component defined in AppBreadcrumb.js file based on PrimeReact <a href="https://primefaces.org/primereact/showcase/#/breadcrumb">Breadcrumb</a> component.
                        All properties of the breadcrumb component are available. The pseudo code is as follows.</p>
<AppCodeHighlight lang="js">
{`
<elementTag className="layout-breadcrumb-container">
    <BreadCrumb model={model} home={home} className="layout-breadcrumb" />

    <elementTag className="layout-breadcrumb-buttons">
        // custom implementation for right buttons
    </elementTag>
</elementTag>
`}
</AppCodeHighlight>
                    <small className="muted-text">(* Note: The &lt;elementTag&gt; tag can be an html element or a component tag. It can be changed according to need.)</small>
                    <h5>Footer</h5>
                    <p>It is a separate component defined in AppFooter.js file. The pseudo code is as follows.</p>
<AppCodeHighlight lang="js">
{`
<elementTag className="layout-footer">
    // custom implementation
</elementTag>
`}
</AppCodeHighlight>
                    <small className="muted-text">(* Note: The &lt;elementTag&gt; tag can be an html element or a component tag. It can be changed according to need.)</small>

                    <h4>Theme</h4>
                    <p>Ultima provides 34 PrimeReact themes out of the box, setup of a theme simple including the css of theme to your page that are located inside assets/theme folder such as <b>assets/theme/amber/*</b>.</p>

                    <ul>
                        <li>amber/theme-light</li>
                        <li>amber/theme-dark</li>
                        <li>blue/theme-light</li>
                        <li>blue/theme-dark</li>
                        <li>bluegrey/theme-light</li>
                        <li>bluegrey/theme-dark</li>
                        <li>brown/theme-light</li>
                        <li>brown/theme-dark</li>
                        <li>cyan/theme-light</li>
                        <li>cyan/theme-dark</li>
                        <li>deeporange/theme-light</li>
                        <li>deeporange/theme-dark</li>
                        <li>deeppurple/theme-light</li>
                        <li>deeppurple/theme-dark</li>
                        <li>green/theme-light</li>
                        <li>green/theme-dark</li>
                        <li>indigo/theme-light</li>
                        <li>indigo/theme-dark</li>
                        <li>lightblue/theme-light</li>
                        <li>lightblue/theme-dark</li>
                        <li>lightgreen/theme-light</li>
                        <li>lightgreen/theme-dark</li>
                        <li>lime/theme-light</li>
                        <li>lime/theme-dark</li>
                        <li>orange/theme-light</li>
                        <li>orange/theme-dark</li>
                        <li>pink/theme-light</li>
                        <li>pink/theme-dark</li>
                        <li>purple/theme-light</li>
                        <li>purple/theme-dark</li>
                        <li>teal/theme-light</li>
                        <li>teal/theme-dark</li>
                        <li>yellow/theme-light</li>
                        <li>yellow/theme-dark</li>
                    </ul>

                    <p>A custom theme can be developed by the following steps.</p>
                    <ul>
                        <li>Choose a custom theme name such as theme-myown.</li>
                        <li>Create a file named theme-myown.scss under <i>assets/theme folder</i>.</li>
                        <li>Define the variables listed below and import the <i>/sass/theme/_theme_light</i> file.</li>
                        <li>Build the scss to generate css</li>
                        <li>Include the generated theme.css to your page.</li>
                    </ul>

                    <p>Here are the variables required to create a theme, you may need to change the last line according to the
                    relative path of the sass folder in your application.</p>

<AppCodeHighlight lang="css">
{`
$primaryColor:#2196F3;
$primaryLightestColor: #E3F2FD;
$primaryMenuTextColor: $primaryColor;
$primaryTextColor:#ffffff;
$accentColor:#f37f21;
$accentTextColor:#212121;

@import '../../sass/theme/theme_light';
`}
</AppCodeHighlight>

                        <p>An example sass command to compile the css would be;</p>

<AppCodeHighlight>
{`
sass public/assets/theme-myown/theme.scss public/assets/theme-myown/theme.css
`}
</AppCodeHighlight>

                        <p>Watch mode is handy to avoid compiling everytime when a change is made, instead use the following command
                            so that sass generates the file whenever you make a customization. This builds all css files whenever a change is made to any scss file.</p>
<AppCodeHighlight>
{`
sass --watch public/assets:public/assets --no-source-map
`}
</AppCodeHighlight>
<p>For both cases, several .scss files such as _layout.scss, _theme.scss or _variables.scss has to be present relative to your scss files, these are available inside the assets/sass folder in the distribution.</p>
<p>In case you'd like to customize the structure not just the colors, the _variables.scss is where the structural variables (e.g. font size, paddings) for the layout are defined.</p>
<h6>sass/variables/layout/_layout_common.scss</h6>
<AppCodeHighlight lang="css">
{`
//general
$fontSize:14px !default;
$fontFamily: 'Roboto' !default;
$borderRadius:5px !default;
$animationDuration:.2s !default;
$animationTimingFunction:cubic-bezier(.05,.74,.2,.99) !default;
$letterSpacing:normal !default;
$transitionDuration:.2s !default;
$mobileBreakpoint:991px !default;
`}
</AppCodeHighlight>
                    <h6>sass/variables/theme/_theme_light.scss</h6>
<div style={{overflow: 'auto', height: '400px', marginBottom: '10px'}}>
<AppCodeHighlight lang="css">
{`
$colors: (
    "blue": #2196F3,
    "green": #689F38,
    "yellow": #FBC02D,
    "cyan": #00BCD4,
    "pink": #E91E63,
    "indigo": #4E5FBB,
    "teal": #009688,
    "orange": #FF9800,
    "bluegray": #607D8B,
    "purple": #9C27B0
);

$emphasis-high:rgba(0,0,0,.87);
$emphasis-medium:rgba(0,0,0,.60);
$emphasis-low:rgba(0,0,0,.38);
$emphasis-lower:rgba(0,0,0,.12);
$overlayColor:#000000;

//global
$fontFamily:Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;
$fontSize:1rem;
$fontWeight:normal;
$textColor:$emphasis-high;
$textSecondaryColor:$emphasis-medium;
$borderRadius:4px;
$transitionDuration:.2s;
$formElementTransition:background-color $transitionDuration, border-color $transitionDuration, color $transitionDuration, box-shadow $transitionDuration, background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
$actionIconTransition:background-color $transitionDuration, color $transitionDuration, box-shadow $transitionDuration;
$listItemTransition:none;
$primeIconFontSize:1rem;
$divider:1px solid rgba(0,0,0,.12);
$inlineSpacing:.5rem;
$disabledOpacity:.38;
$maskBg:rgba(0, 0, 0, 0.32);
$loadingIconFontSize:2rem;
$errorColor:#B00020;

//selected state
$highlightBg:rgba($primaryColor, .12);
$highlightTextColor:$primaryColor;

//scale
$scaleSM:0.875;
$scaleLG:1.25;

//focus
$focusOutlineColor:transparent;
$focusOutline:0 none;
$focusOutlineOffset:0;
$focusShadow:none;

//action icons
$actionIconWidth:2.5rem;
$actionIconHeight:2.5rem;
$actionIconBg:transparent;
$actionIconBorder:0 none;
$actionIconColor:$textSecondaryColor;
$actionIconHoverBg:rgba(0,0,0,.04);
$actionIconHoverBorderColor:transparent;
$actionIconHoverColor:$textSecondaryColor;
$actionIconBorderRadius:50%;

//input field (e.g. inputtext, spinner, inputmask)
$inputPadding:1rem 1rem;
$inputTextFontSize:1rem;
$inputBg:#ffffff;
$inputTextColor:$emphasis-high;
$inputIconColor:$emphasis-medium;
$inputBorder:1px solid $emphasis-low;
$inputHoverBorderColor:$emphasis-high;
$inputFocusBorderColor:$primaryColor;
$inputErrorBorderColor:$errorColor;
$inputPlaceholderTextColor:$emphasis-medium;
$inputFilledBg:#f5f5f5;
$inputFilledHoverBg:#ececec;
$inputFilledFocusBg:#dcdcdc;

//input groups
$inputGroupBg:$inputBg;
$inputGroupTextColor:$emphasis-medium;
$inputGroupAddOnMinWidth:2.357rem;

//input lists (e.g. dropdown, autocomplete, multiselect, orderlist)
$inputListBg:#ffffff;
$inputListTextColor:$textColor;
$inputListBorder:$inputBorder;
$inputListPadding:0;
$inputListItemPadding:1rem 1rem;
$inputListItemBg:transparent;
$inputListItemTextColor:$textColor;
$inputListItemHoverBg:rgba(0,0,0,.04);
$inputListItemTextHoverColor:$textColor;
$inputListItemBorder:0 none;
$inputListItemBorderRadius:0;
$inputListItemMargin:0;
$inputListItemFocusShadow:none;
$inputListHeaderPadding:1rem;
$inputListHeaderMargin:0;
$inputListHeaderBg:#ffffff;
$inputListHeaderTextColor:$textColor;
$inputListHeaderBorder:1px solid rgba(0,0,0,.12);

//inputs with overlays (e.g. autocomplete, dropdown, multiselect)
$inputOverlayBg:$inputListBg;
$inputOverlayHeaderBg:$inputListHeaderBg;
$inputOverlayBorder:0 none;
$inputOverlayShadow:0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);

//password
$passwordMeterBg:rgba($primaryColor, .32);
$passwordWeakBg:#D32F2F;
$passwordMediumBg:#FBC02D;
$passwordStrongBg:#689F38;

//button
$buttonPadding:0.714rem 1rem;
$buttonIconOnlyWidth:3rem;
$buttonIconOnlyPadding:0.714rem;
$buttonBg:$primaryColor;
$buttonTextColor:$primaryTextColor;
$buttonBorder:0 none;
$buttonHoverBg:rgba($primaryColor, .92);
$buttonTextHoverColor:$primaryTextColor;
$buttonHoverBorderColor:transparent;
$buttonActiveBg:rgba($primaryColor, .68);
$buttonTextActiveColor:$primaryTextColor;
$buttonActiveBorderColor:transparent;
$raisedButtonShadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
$roundedButtonBorderRadius:2rem;

$textButtonHoverBgOpacity:.04;
$textButtonActiveBgOpacity:.16;
$outlinedButtonBorder:1px solid;
$plainButtonTextColor:$textSecondaryColor;
$plainButtonHoverBgColor:rgba(0,0,0,.04);
$plainButtonActiveBgColor:rgba(0,0,0,.16);

$secondaryButtonBg:$accentColor;
$secondaryButtonTextColor:$accentTextColor;
$secondaryButtonBorder:0 none;
$secondaryButtonHoverBg:rgba($accentColor, .92);
$secondaryButtonTextHoverColor:$accentTextColor;
$secondaryButtonHoverBorderColor:transparent;
$secondaryButtonActiveBg:rgba($accentColor, .68);
$secondaryButtonTextActiveColor:$accentTextColor;
$secondaryButtonActiveBorderColor:transparent;
$secondaryButtonFocusShadow:none;

$infoButtonBg:#2196F3;
$infoButtonTextColor:#ffffff;
$infoButtonBorder:0 none;
$infoButtonHoverBg:rgba(#2196F3, .92);
$infoButtonTextHoverColor:#ffffff;
$infoButtonHoverBorderColor:transparent;
$infoButtonActiveBg:rgba(#2196F3, .68);
$infoButtonTextActiveColor:#ffffff;
$infoButtonActiveBorderColor:transparent;
$infoButtonFocusShadow:none;

$successButtonBg:#689F38;
$successButtonTextColor:#ffffff;
$successButtonBorder:0 none;
$successButtonHoverBg:rgba(#689F38, .92);
$successButtonTextHoverColor:#ffffff;
$successButtonHoverBorderColor:transparent;
$successButtonActiveBg:rgba(#689F38, .68);
$successButtonTextActiveColor:#ffffff;
$successButtonActiveBorderColor:transparent;
$successButtonFocusShadow:none;

$warningButtonBg:#FBC02D;
$warningButtonTextColor:#212529;
$warningButtonBorder:0 none;
$warningButtonHoverBg:rgba(#FBC02D, .92);
$warningButtonTextHoverColor:#212529;
$warningButtonHoverBorderColor:transparent;
$warningButtonActiveBg:rgba(#FBC02D, .68);
$warningButtonTextActiveColor:#212529;
$warningButtonActiveBorderColor:transparent;
$warningButtonFocusShadow:none;

$helpButtonBg:#9C27B0;
$helpButtonTextColor:#ffffff;
$helpButtonBorder:0 none;
$helpButtonHoverBg:rgba(#9C27B0, .92);
$helpButtonTextHoverColor:#ffffff;
$helpButtonHoverBorderColor:transparent;
$helpButtonActiveBg:rgba(#9C27B0, .68);
$helpButtonTextActiveColor:#ffffff;
$helpButtonActiveBorderColor:transparent;
$helpButtonFocusShadow:none;

$dangerButtonBg:#D32F2F;
$dangerButtonTextColor:#ffffff;
$dangerButtonBorder:0 none;
$dangerButtonHoverBg:rgba(#D32F2F, .92);
$dangerButtonTextHoverColor:#ffffff;
$dangerButtonHoverBorderColor:transparent;
$dangerButtonActiveBg:rgba(#D32F2F, .68);
$dangerButtonTextActiveColor:#ffffff;
$dangerButtonActiveBorderColor:transparent;
$dangerButtonFocusShadow:none;

$linkButtonColor:$primaryColor;
$linkButtonHoverColor:$primaryColor;
$linkButtonTextHoverDecoration:underline;
$linkButtonFocusShadow:none;

//checkbox
$checkboxWidth:18px;
$checkboxHeight:18px;
$checkboxBorder:2px solid #757575;
$checkboxIconFontSize:14px;
$checkboxActiveBorderColor:$primaryColor;
$checkboxActiveBg:$primaryColor;
$checkboxIconActiveColor:$primaryTextColor;
$checkboxActiveHoverBg:$primaryColor;
$checkboxIconActiveHoverColor:$primaryTextColor;
$checkboxActiveHoverBorderColor:$primaryColor;

//radiobutton
$radiobuttonWidth:20px;
$radiobuttonHeight:20px;
$radiobuttonBorder:2px solid #757575;
$radiobuttonIconSize:10px;
$radiobuttonActiveBorderColor:$primaryColor;
$radiobuttonActiveBg:$primaryTextColor;
$radiobuttonIconActiveColor:$primaryColor;
$radiobuttonActiveHoverBg:$primaryTextColor;
$radiobuttonIconActiveHoverColor:$primaryColor;
$radiobuttonActiveHoverBorderColor:$primaryColor;

//colorpicker
$colorPickerPreviewWidth:2rem;
$colorPickerPreviewHeight:2rem;
$colorPickerBg:#323232;
$colorPickerBorder:1px solid #191919;
$colorPickerHandleColor:#ffffff;

//togglebutton
$toggleButtonBg:#ffffff;
$toggleButtonBorder:1px solid rgba(0,0,0,.12);
$toggleButtonTextColor:$textColor;
$toggleButtonIconColor:$textSecondaryColor;
$toggleButtonHoverBg:#f6f6f6;
$toggleButtonHoverBorderColor:rgba(0,0,0,.12);
$toggleButtonTextHoverColor:$textColor;
$toggleButtonIconHoverColor:$textSecondaryColor;
$toggleButtonActiveBg:#e0e0e1;
$toggleButtonActiveBorderColor:#e0e0e1;
$toggleButtonTextActiveColor:$textColor;
$toggleButtonIconActiveColor:$textSecondaryColor;
$toggleButtonActiveHoverBg:#d9d8d9;
$toggleButtonActiveHoverBorderColor:#d9d8d9;
$toggleButtonTextActiveHoverColor:$textColor;
$toggleButtonIconActiveHoverColor:$textSecondaryColor;;

//inplace
$inplacePadding:$inputPadding;
$inplaceHoverBg:rgba(0,0,0,.04);
$inplaceTextHoverColor:$textColor;

//rating
$ratingIconFontSize:1.143rem;
$ratingCancelIconColor:#B00020;
$ratingCancelIconHoverColor:#B00020;
$ratingStarIconOffColor:$primaryColor;
$ratingStarIconOnColor:$primaryColor;
$ratingStarIconHoverColor:$primaryColor;

//slider
$sliderBg:#c1c1c1;
$sliderBorder:0 none;
$sliderHorizontalHeight:2px;
$sliderVerticalWidth:2px;
$sliderHandleWidth:20px;
$sliderHandleHeight:20px;
$sliderHandleBg:$primaryColor;
$sliderHandleBorder:0 none;
$sliderHandleBorderRadius:50%;
$sliderHandleHoverBorderColor:0 none;
$sliderHandleHoverBg:$primaryColor;
$sliderRangeBg:$primaryColor;

//calendar
$calendarTableMargin:.5rem 0;
$calendarPadding:.5rem;
$calendarBg:#ffffff;
$calendarInlineBg:$calendarBg;
$calendarTextColor:$textColor;
$calendarBorder:$inputListBorder;
$calendarOverlayBorder:$inputOverlayBorder;

$calendarHeaderPadding:.5rem;
$calendarHeaderBg:#ffffff;
$calendarInlineHeaderBg:$calendarBg;
$calendarHeaderBorder:$divider;
$calendarHeaderTextColor:$textColor;
$calendarHeaderFontWeight:500;
$calendarHeaderCellPadding:.5rem;

$calendarCellDatePadding:.5rem;
$calendarCellDateWidth:2.5rem;
$calendarCellDateHeight:2.5rem;
$calendarCellDateBorderRadius:50%;
$calendarCellDateBorder:1px solid transparent;
$calendarCellDateHoverBg:rgba(0,0,0,.04);
$calendarCellDateTodayBg:#ffffff;
$calendarCellDateTodayBorderColor: rgba(0,0,0,12);
$calendarCellDateTodayTextColor:$textColor;

$calendarButtonBarPadding:1rem 0;
$calendarTimePickerPadding:.5rem;
$calendarTimePickerElementPadding:0 .5rem;
$calendarTimePickerTimeFontSize:1.25rem;

$calendarBreakpoint:769px;
$calendarCellDatePaddingSM:0;

//input switch
$inputSwitchWidth:2.75rem;
$inputSwitchHeight:1rem;
$inputSwitchBorderRadius:.5rem;
$inputSwitchHandleWidth:1.50rem;
$inputSwitchHandleHeight:1.50rem;
$inputSwitchHandleBorderRadius:50%;
$inputSwitchSliderPadding:-1px;
$inputSwitchSliderOffBg:rgba(0,0,0,.38);
$inputSwitchHandleOffBg:#ffffff;
$inputSwitchSliderOffHoverBg:rgba(0,0,0,.38);
$inputSwitchSliderOnBg:rgba($primaryColor, .5);
$inputSwitchSliderOnHoverBg:rgba($primaryColor, .5);
$inputSwitchHandleOnBg:$primaryColor;

//panel
$panelHeaderBorderColor: #e0e0e0;
$panelHeaderBorder:1px solid #e0e0e0;
$panelHeaderBg:#ffffff;
$panelHeaderTextColor:$textColor;
$panelHeaderFontWeight:500;
$panelHeaderPadding:1rem;
$panelToggleableHeaderPadding:.5rem 1rem;

$panelHeaderHoverBg:rgba(0,0,0,.04);
$panelHeaderHoverBorderColor:#e0e0e0;
$panelHeaderTextHoverColor:$textColor;

$panelContentBorderColor: #e0e0e0;
$panelContentBorder:1px solid #e0e0e0;
$panelContentBg:#ffffff;
$panelContentTextColor:$textColor;
$panelContentPadding:1rem;

$panelFooterBorder:1px solid #e0e0e0;
$panelFooterBg:#ffffff;
$panelFooterTextColor:$textColor;
$panelFooterPadding:1rem 1rem;

//accordion
$accordionSpacing:0;
$accordionHeaderBorder:0 none;
$accordionHeaderBg:#ffffff;
$accordionHeaderTextColor:$textColor;
$accordionHeaderFontWeight:400;
$accordionHeaderPadding:1.5rem;

$accordionHeaderHoverBg:#f6f6f6;
$accordionHeaderHoverBorderColor:transparent;
$accordionHeaderTextHoverColor:$textColor;

$accordionHeaderActiveBg:#ffffff;
$accordionHeaderActiveBorderColor:transparent;
$accordionHeaderTextActiveColor:$textColor;

$accordionHeaderActiveHoverBg:#ffffff;
$accordionHeaderActiveHoverBorderColor:transparent;
$accordionHeaderTextActiveHoverColor:$textColor;

$accordionContentBorder:0 none;
$accordionContentBg:#ffffff;
$accordionContentTextColor:$textColor;
$accordionContentPadding:1rem 1.5rem;

//tabview
$tabviewNavBorder:solid rgba(0,0,0,.12);
$tabviewNavBorderWidth:0 0 1px 0;
$tabviewNavBg:#ffffff;

$tabviewHeaderSpacing:0;
$tabviewHeaderBorder:none;
$tabviewHeaderBorderWidth:0 0 0 0;
$tabviewHeaderBorderColor:transparent transparent transparent transparent;
$tabviewHeaderBg:#ffffff;
$tabviewHeaderTextColor:$textSecondaryColor;
$tabviewHeaderFontWeight:500;
$tabviewHeaderPadding:1rem 1.5rem;
$tabviewHeaderMargin:0 0 0 0;

$tabviewHeaderHoverBg:rgba($primaryColor,.04);
$tabviewHeaderHoverBorderColor:transparent;
$tabviewHeaderTextHoverColor:$textSecondaryColor;

$tabviewHeaderActiveBg:#ffffff;
$tabviewHeaderActiveBorderColor:transparent;
$tabviewHeaderTextActiveColor:$primaryColor;

$tabviewContentBorder:0 none;
$tabviewContentBg:#ffffff;
$tabviewContentTextColor:$textColor;
$tabviewContentPadding:$panelContentPadding;

//upload
$fileUploadProgressBarHeight:4px;
$fileUploadContentPadding:2rem 1rem;

//scrollpanel
$scrollPanelTrackBorder:0 none;
$scrollPanelTrackBg:rgba(0,0,0,.12);

//card
$cardBodyPadding:1rem;
$cardTitleFontSize:1.5rem;
$cardTitleFontWeight:700;
$cardSubTitleFontWeight:400;
$cardSubTitleColor:$textSecondaryColor;
$cardContentPadding:1rem 0;
$cardFooterPadding:1rem 0 0 0;
$cardShadow:0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);

//editor
$editorToolbarBg:$panelHeaderBg;
$editorToolbarBorder:$panelHeaderBorder;
$editorToolbarPadding:$panelHeaderPadding;
$editorToolbarIconColor:$textSecondaryColor;
$editorToolbarIconHoverColor:$textColor;
$editorIconActiveColor:$primaryColor;
$editorContentBorder:$panelContentBorder;
$editorContentBg:$panelContentBg;

//paginator
$paginatorBg:#ffffff;
$paginatorTextColor:$textColor;
$paginatorBorder:solid #e4e4e4;
$paginatorBorderWidth:0;
$paginatorPadding:.5rem 1rem;
$paginatorElementWidth:$buttonIconOnlyWidth;
$paginatorElementHeight:$buttonIconOnlyWidth;
$paginatorElementBg:transparent;
$paginatorElementBorder:0 none;
$paginatorElementIconColor:$textSecondaryColor;
$paginatorElementHoverBg:rgba(0,0,0,.04);
$paginatorElementHoverBorderColor:transparent;
$paginatorElementIconHoverColor:$textSecondaryColor;
$paginatorElementBorderRadius:50%;
$paginatorElementMargin:.143rem;
$paginatorElementPadding:0;

//table
$tableHeaderBorder:1px solid #e4e4e4;
$tableHeaderBorderWidth:0 0 1px 0;
$tableHeaderBg:#ffffff;
$tableHeaderTextColor:$textColor;
$tableHeaderFontWeight:500;
$tableHeaderPadding:1rem 1rem;

$tableHeaderCellPadding:1rem 1rem;
$tableHeaderCellBg:#ffffff;
$tableHeaderCellTextColor:$textColor;
$tableHeaderCellFontWeight:500;
$tableHeaderCellBorder:1px solid #e4e4e4;
$tableHeaderCellBorderWidth:0 0 1px 0;
$tableHeaderCellHoverBg:rgba(0,0,0,.04);
$tableHeaderCellTextHoverColor:$textColor;
$tableHeaderCellIconColor:$textSecondaryColor;
$tableHeaderCellIconHoverColor:$textSecondaryColor;
$tableHeaderCellHighlightBg:#ffffff;
$tableHeaderCellHighlightTextColor:$textColor;
$tableHeaderCellHighlightHoverBg:rgba(0,0,0,.04);
$tableHeaderCellHighlightTextHoverColor:$textColor;
$tableSortableColumnBadgeSize:1.143rem;

$tableBodyRowBg:#ffffff;
$tableBodyRowTextColor:$textColor;
$tableBodyRowEvenBg:rgba(0,0,0,.02);
$tableBodyRowHoverBg:rgba(0,0,0,.04);
$tableBodyRowTextHoverColor:$textColor;
$tableBodyCellBorder:1px solid #e4e4e4;
$tableBodyCellBorderWidth:0 0 1px 0;
$tableBodyCellPadding:1rem 1rem;

$tableFooterCellPadding:1rem 1rem;
$tableFooterCellBg:#ffffff;
$tableFooterCellTextColor:$textColor;
$tableFooterCellFontWeight:500;
$tableFooterCellBorder:1px solid #e4e4e4;
$tableFooterCellBorderWidth:0 0 1px 0;
$tableResizerHelperBg:$primaryColor;
$tableDragHelperBg: rgba($primaryColor, .16);


$tableFooterBorder:1px solid #e4e4e4;
$tableFooterBorderWidth:0 0 1px 0;
$tableFooterBg:#ffffff;
$tableFooterTextColor:$textColor;
$tableFooterFontWeight:500;
$tableFooterPadding:1rem 1rem;

$tableCellContentAlignment:left;
$tableTopPaginatorBorderWidth:0 0 1px 0;
$tableBottomPaginatorBorderWidth:0 0 1px 0;

$tableScaleSM:0.5;
$tableScaleLG:1.25;

//dataview
$dataViewContentPadding:1rem 0;
$dataViewContentBorder:0 none;
$dataViewListItemBorder:solid rgba(0,0,0,.12);
$dataViewListItemBorderWidth:0 0 1px 0;

//orderlist, picklist
$orderListBreakpoint:769px;
$pickListBreakpoint:769px;

//schedule
$fullCalendarEventBg:$highlightBg;
$fullCalendarEventBorderColor:$highlightBg;
$fullCalendarEventBorder:1px solid $highlightBg;
$fullCalendarEventTextColor:$highlightTextColor;

//tree
$treeNodePadding:.25rem;
$treeNodeContentPadding:.75rem;
$treeNodeChildrenPadding:0 0 0 1rem;
$treeNodeIconColor:$textSecondaryColor;

//timeline
$timelineVerticalEventContentPadding:0 1rem !default;
$timelineHorizontalEventContentPadding:1rem 0 !default;
$timelineEventMarkerWidth:1rem !default;
$timelineEventMarkerHeight:1rem !default;
$timelineEventMarkerBorderRadius:50% !default;
$timelineEventMarkerBorder:0 none !default;
$timelineEventMarkerBackground:#bdbdbd !default;
$timelineEventConnectorSize:2px !default;
$timelineEventColor:#bdbdbd !default;

//org chart
$organizationChartConnectorColor:rgba(0,0,0,.12);

//message
$messageMargin:1rem 0;
$messagePadding: 1.25rem 1.5rem;
$messageBorderWidth:0 0 0 0;
$messageIconFontSize:1.5rem;
$messageTextFontSize:1rem;
$messageTextFontWeight:500;

//inline message
$inlineMessagePadding:$inputPadding;
$inlineMessageMargin:0;
$inlineMessageIconFontSize:1rem;
$inlineMessageTextFontSize:1rem;
$inlineMessageBorderWidth:1px;

//toast
$toastIconFontSize:2rem;
$toastMessageTextMargin:0 0 0 1rem;
$toastMargin:0 0 1rem 0;
$toastPadding:1.5rem;
$toastBorderWidth:0 0 0 0;
$toastShadow:0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
$toastOpacity:.9;
$toastTitleFontWeight:700;
$toastDetailMargin:$inlineSpacing 0 0 0;

//severities
$infoMessageBg:#B3E5FC;
$infoMessageBorder:solid transparent;
$infoMessageTextColor:#01579B;
$infoMessageIconColor:#01579B;
$successMessageBg:#C8E6C9;
$successMessageBorder:solid transparent;
$successMessageTextColor:#1B5E20;
$successMessageIconColor:#1B5E20;
$warningMessageBg:#FFECB3;
$warningMessageBorder:solid transparent;
$warningMessageTextColor:#7f6003;
$warningMessageIconColor:#7f6003;
$errorMessageBg:#FFCDD2;
$errorMessageBorder:solid transparent;
$errorMessageTextColor:#B71C1C;
$errorMessageIconColor:#B71C1C;

//overlays
$overlayContentBorder:0 none;
$overlayContentBg:$panelContentBg;
$overlayContainerShadow:0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12);

//dialog
$dialogHeaderBg:#ffffff;
$dialogHeaderBorder:0 none;
$dialogHeaderTextColor:$textColor;
$dialogHeaderFontWeight:500;
$dialogHeaderFontSize:1.25rem;
$dialogHeaderPadding:1.5rem;
$dialogContentPadding: 0 1.5rem 1.5rem 1.5rem;
$dialogFooterBorder:0 none;
$dialogFooterPadding:1rem 1.5rem;

//confirmpopup
$confirmPopupContentPadding:1.5rem;
$confirmPopupFooterPadding:0 1.5rem 1rem 1.5rem;

//tooltip
$tooltipBg:rgba(97,97,97,.9);
$tooltipTextColor:#ffffff;
$tooltipPadding:.5rem;

//steps
$stepsItemBg:transparent;
$stepsItemBorder:1px solid transparent;
$stepsItemTextColor:$textColor;
$stepsItemNumberWidth:2rem;
$stepsItemNumberHeight:2rem;
$stepsItemNumberFontSize:1.143rem;
$stepsItemNumberColor:$textColor;
$stepsItemNumberBorderRadius:50%;
$stepsItemActiveFontWeight:500;

//progressbar
$progressBarHeight:4px;
$progressBarBorder:0 none;
$progressBarBg:rgba($primaryColor, .32);
$progressBarValueBg:$primaryColor;

//menu (e.g. menu, menubar, tieredmenu)
$menuWidth:12.5rem;
$menuBg:#ffffff;
$menuBorder:1px solid #e5e5e5;
$menuTextColor:$textColor;
$menuitemPadding:1rem 1rem;
$menuitemBorderRadius:0;
$menuitemTextColor:$textColor;
$menuitemIconColor:$textSecondaryColor;
$menuitemTextHoverColor:$textColor;
$menuitemIconHoverColor:$textSecondaryColor;
$menuitemHoverBg:rgba(0,0,0,.04);
$menuitemTextActiveColor:$textColor;
$menuitemIconActiveColor:$textSecondaryColor;
$menuitemActiveBg:rgba(0,0,0,.04);
$menuitemSubmenuIconFontSize:.875rem;
$submenuHeaderMargin:0;
$submenuHeaderPadding:1rem;
$submenuHeaderBg:#ffffff;
$submenuHeaderTextColor:$textSecondaryColor;
$submenuHeaderBorderRadius:0;
$submenuHeaderFontWeight:400;
$overlayMenuBg:$menuBg;
$overlayMenuBorder:0 none;
$overlayMenuShadow:0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
$verticalMenuitemMargin:0;
$verticalMenuPadding:.5rem 0;
$menuSeparatorMargin:.5rem 0;

$breadcrumbPadding:1rem;
$breadcrumbBg:#ffffff;
$breadcrumbBorder:1px solid #e5e5e5;
$breadcrumbItemTextColor:$textColor;
$breadcrumbItemIconColor:$textSecondaryColor;
$breadcrumbLastItemTextColor:$textColor;
$breadcrumbLastItemIconColor:$textSecondaryColor;
$breadcrumbSeparatorColor:$textSecondaryColor;

$horizontalMenuPadding:1rem;
$horizontalMenuBg:transparent;
$horizontalMenuBorder:1px solid #e5e5e5;
$horizontalMenuTextColor:$textColor;
$horizontalMenuRootMenuitemPadding:1rem;
$horizontalMenuRootMenuitemBorderRadius:$borderRadius;
$horizontalMenuRootMenuitemTextColor:$textColor;
$horizontalMenuRootMenuitemIconColor:$textSecondaryColor;
$horizontalMenuRootMenuitemTextHoverColor:$textColor;
$horizontalMenuRootMenuitemIconHoverColor:$textSecondaryColor;
$horizontalMenuRootMenuitemHoverBg:rgba(0,0,0,.04);
$horizontalMenuRootMenuitemTextActiveColor:$textColor;
$horizontalMenuRootMenuitemIconActiveColor:$textSecondaryColor;
$horizontalMenuRootMenuitemActiveBg:rgba(0,0,0,.04);

//badge and tag
$badgeBg:$primaryColor;
$badgeTextColor:$primaryTextColor;
$badgeMinWidth:1.5rem;
$badgeHeight:1.5rem;
$badgeFontWeight:700;
$badgeFontSize:.75rem;

$tagPadding:.25rem .4rem;

//carousel
$carouselIndicatorsPadding:1rem;
$carouselIndicatorBg:#dcdcdc;
$carouselIndicatorHoverBg:#ececec;
$carouselIndicatorBorderRadius:0;
$carouselIndicatorWidth:2rem;
$carouselIndicatorHeight:.5rem;

//galleria
$galleriaMaskBg:rgba(0,0,0,0.9);
$galleriaCloseIconMargin:.5rem;
$galleriaCloseIconFontSize:2rem;
$galleriaCloseIconBg:transparent;
$galleriaCloseIconColor:rgba(255,255,255,.87);
$galleriaCloseIconHoverBg:rgba(255,255,255,0.1);
$galleriaCloseIconHoverColor:rgba(255,255,255,.87);
$galleriaCloseIconWidth:4rem;
$galleriaCloseIconHeight:4rem;
$galleriaCloseIconBorderRadius:50%;

$galleriaItemNavigatorBg:transparent;
$galleriaItemNavigatorColor:#f6f6f6;
$galleriaItemNavigatorMargin:0 .5rem;
$galleriaItemNavigatorFontSize:2rem;
$galleriaItemNavigatorHoverBg:rgba(255,255,255,0.1);
$galleriaItemNavigatorHoverColor:rgba(255,255,255,.87);
$galleriaItemNavigatorWidth:4rem;
$galleriaItemNavigatorHeight:4rem;
$galleriaItemNavigatorBorderRadius:50%;

$galleriaCaptionBg:rgba(0,0,0,.5);
$galleriaCaptionTextColor:rgba(255,255,255,.87);
$galleriaCaptionPadding:1rem;

$galleriaIndicatorsPadding:1rem;
$galleriaIndicatorBg:#dcdcdc;
$galleriaIndicatorHoverBg:#ececec;
$galleriaIndicatorBorderRadius:50%;
$galleriaIndicatorWidth:1.25rem;
$galleriaIndicatorHeight:1.25rem;
$galleriaIndicatorsBgOnItem:rgba(0,0,0,.5);
$galleriaIndicatorBgOnItem:rgba(255,255,255,.4);
$galleriaIndicatorHoverBgOnItem:rgba(255,255,255,.6);

$galleriaThumbnailContainerBg:rgba(0,0,0,.9);
$galleriaThumbnailContainerPadding:1rem .25rem;
$galleriaThumbnailNavigatorBg:transparent;
$galleriaThumbnailNavigatorColor:rgba(255,255,255,.87);
$galleriaThumbnailNavigatorHoverBg:rgba(255,255,255,0.1);
$galleriaThumbnailNavigatorHoverColor:rgba(255,255,255,.87);
$galleriaThumbnailNavigatorBorderRadius:50%;
$galleriaThumbnailNavigatorWidth:2rem;
$galleriaThumbnailNavigatorHeight:2rem;

//divider
$dividerHorizontalMargin:1.25rem 0;
$dividerHorizontalPadding:0 1.25rem;
$dividerVerticalMargin:0 1.25rem;
$dividerVerticalPadding:1.25rem 0;
$dividerSize:1px;
$dividerColor:rgba(0,0,0,.12);

//avatar
$avatarBg:rgba(0,0,0,.12);
$avatarTextColor:$textColor;

//chip
$chipBg:rgba(0,0,0,.12);
$chipTextColor:$textColor;
$chipBorderRadius: 16px;

//scrollTop
$scrollTopBg:$accentColor;
$scrollTopHoverBg:rgba($accentColor, .92);
$scrollTopWidth:3rem;
$scrollTopHeight:3rem;
$scrollTopBorderRadius:50%;
$scrollTopFontSize:1.5rem;
$scrollTopTextColor:$accentTextColor;

//skeleton
$skeletonBg:rgba(0,0,0,.08);
$skeletonAnimationBg:rgba(255,255,255,0.4);

//splitter
$splitterGutterBg:rgba(0,0,0,.04);
$splitterGutterHandleBg:rgba(0,0,0,.12);

//speeddial
$speedDialButtonWidth: 4rem;
$speedDialButtonHeight: 4rem;
$speedDialButtonIconFontSize: 2rem;
$speedDialActionWidth: 3rem;
$speedDialActionHeight: 3rem;
$speedDialActionBg: $accentColor;
$speedDialActionHoverBg: rgba($accentColor, .92);
$speedDialActionTextColor: #fff;
$speedDialActionTextHoverColor: #fff;

//dock
$dockActionWidth: 4rem;
$dockActionHeight: 4rem;
$dockItemPadding: .5rem;
$dockCurrentItemMargin: 1.5rem;
$dockFirstItemsMargin: 1.3rem;
$dockSecondItemsMargin: 0.9rem;
$dockBg: rgba(255,255,255,.1);
$dockBorder: 1px solid rgba(255,255,255,0.2);
$dockPadding: .5rem .5rem;
$dockBorderRadius: .5rem;

//image
$imageMaskBg:rgba(0,0,0,0.9) !default;
$imagePreviewToolbarPadding:1rem !default;
$imagePreviewIndicatorColor:#f8f9fa !default;
$imagePreviewIndicatorBg:rgba(0,0,0,0.5) !default;
$imagePreviewActionIconBg:transparent !default;
$imagePreviewActionIconColor:#f8f9fa !default;
$imagePreviewActionIconHoverBg:rgba(255,255,255,0.1) !default;
$imagePreviewActionIconHoverColor:#f8f9fa !default;
$imagePreviewActionIconWidth:3rem !default;
$imagePreviewActionIconHeight:3rem !default;
$imagePreviewActionIconFontSize:1.5rem !default;
$imagePreviewActionIconBorderRadius:50% !default;

:root {
    --surface-a:#ffffff;
    --surface-b:#fafafa;
    --surface-c:rgba(0,0,0,.04);
    --surface-d:rgba(0,0,0,.12);
    --surface-e:#ffffff;
    --surface-f:#ffffff;
    --text-color:#{$textColor};
    --text-color-secondary:#{$textSecondaryColor};
    --primary-color:#{$primaryColor};
    --primary-menu-text-color:#{$primaryMenuTextColor};
    --primary-lightest-color:#{$primaryLightestColor};
    --primary-color-text:#{$primaryTextColor};
    --font-family:#{$fontFamily};
}

`}
</AppCodeHighlight>
</div>
                    <h5>Menu Modes</h5>
                    <p>Menu has 4 modes static, overlay, horizontal and slim. Layout container element in application.html is used to define which mode to use by adding specific classes. List
                    below indicates the style classes for each mode. In addition menu</p>
                    <ul>
                        <li>Static: "layout-menu-static"</li>
                        <li>Overlay: "layout-menu-overlay"</li>
                        <li>Horizontal: "layout-menu-horizontal"</li>
                        <li>Slim: "layout-menu-slim"</li>
                    </ul>

                    <p>For example to create a horizontal menu, the div element should be in following form;</p>
<AppCodeHighlight>
{`
<div className="layout-wrapper layout-menu-horizontal">
`}
</AppCodeHighlight>
                    <p>It is also possible to leave the choice to the user by keeping the preference at a component and usign an expression to bind it so that user can switch between modes. Sample
                    application has an example implementation of such use case. Refer to app.component.ts for an example.</p>

                    <h5>Grid CSS</h5>
                    <p>Ultima uses PrimeReact Flex Grid CSS throughout the demos such as Dashboard, however any Grid library can be used with it since Ultima Layout itself does not depend on PrimeFlex CSS.</p>

                    <h5>Customizing Styles</h5>
                    <p>It is suggested to add your customizations in the following sass files under the override folder instead of adding them to the
                        scss files under sass folder to avoid maintenance issues after an update.</p>

                    <ul>
                        <li><b>_layout_variables</b>: Variables of the layout.</li>
                        <li><b>_layout_styles</b>: Styles for the layout.</li>
                        <li><b>_theme_variables</b>: Variables of the theme.</li>
                        <li><b>_theme_styles</b>: Styles for the theme.</li>
                    </ul>

                    <h5>Migration Guide</h5>
                    <p>Every change is included in <b>CHANGELOG.md</b> file at the root folder of the distribution along with the instructions to update.</p>
                </div>
            </div>
        </div>
    )

}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(Documentation, comparisonFn);
