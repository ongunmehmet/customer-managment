import React, { useEffect, useRef, useState } from 'react';
import { classNames } from 'primereact/utils';
import { Route, useLocation } from 'react-router-dom'

import AppTopbar from './AppTopbar';
import AppBreadcrumb from "./AppBreadcrumb";
import AppInlineMenu from './AppInlineMenu';
import AppFooter from './AppFooter';
import AppMenu from './AppMenu';
import AppConfig from './AppConfig';
import AppRightMenu from './AppRightMenu';

import Dashboard from './components/Dashboard';
import DashboardAnalytics from './components/DashboardAnalytics';
import ButtonDemo from './components/ButtonDemo';
import ChartDemo from './components/ChartDemo';
import MessagesDemo from './components/MessagesDemo';
import Documentation from './components/Documentation';
import FileDemo from './components/FileDemo';
import FormLayoutDemo from './components/FormLayoutDemo';
import InputDemo from './components/InputDemo';
import ListDemo from './components/ListDemo';
import MiscDemo from './components/MiscDemo';
import MenuDemo from './components/MenuDemo';
import OverlayDemo from './components/OverlayDemo';
import PanelDemo from './components/PanelDemo';
import TableDemo from './components/TableDemo';
import TreeDemo from './components/TreeDemo';
import FloatLabelDemo from './components/FloatLabelDemo';
import InvalidStateDemo from './components/InvalidStateDemo';

import BlocksDemo from './components/BlocksDemo';
import IconsDemo from './utilities/IconsDemo';

import Crud from './pages/Crud';
import Calendar from './pages/Calendar';
import EmptyPage from './pages/EmptyPage';
import Invoice from './pages/Invoice';
import Help from './pages/Help';
import TimelineDemo from './pages/TimelineDemo';

import PrimeReact from 'primereact/api';
import { Tooltip } from "primereact/tooltip";

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.scss';

export const RTLContext = React.createContext();

const App = () => {

    const [menuMode, setMenuMode] = useState('static');
    const [inlineMenuPosition, setInlineMenuPosition] = useState('bottom');
    const [desktopMenuActive, setDesktopMenuActive] = useState(true);
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [activeTopbarItem, setActiveTopbarItem] = useState(null);
    const [colorMode, setColorMode] = useState('light');
    const [rightMenuActive, setRightMenuActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [inputStyle, setInputStyle] = useState('filled');
    const [isRTL, setRTL] = useState(false);
    const [ripple, setRipple] = useState(true);
    const [mobileTopbarActive, setMobileTopbarActive] = useState(false);
    const [menuTheme, setMenuTheme] = useState('light');
    const [topbarTheme, setTopbarTheme] = useState('blue');
    const [theme, setTheme] = useState('indigo');
    const [isInputBackgroundChanged, setIsInputBackgroundChanged] = useState(false);
    const [inlineMenuActive, setInlineMenuActive] = useState({});
    const [newThemeLoaded, setNewThemeLoaded] = useState(false);
    const [searchActive, setSearchActive] = useState(false)
    const copyTooltipRef = useRef();
    let currentInlineMenuKey = useRef(null);
    const location = useLocation();

    PrimeReact.ripple = true;

    let searchClick;
    let topbarItemClick;
    let menuClick;
    let inlineMenuClick;

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
            label: "PrimeBlocks", icon: "pi pi-fw pi-prime",
            items: [
                { label: "Free Blocks", icon: "pi pi-fw pi-eye", to: "/primeblocks/blocks", badge: "NEW", badgeStyle: { width: '40px' } },
                { label: "All Blocks", icon: "pi pi-fw pi-globe", url: "https://www.primefaces.org/primeblocks-react", target: "_blank" }
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

    const routes = [
        { parent: '', label: '' },
        { parent: 'Favorites', label: 'Dashboard Analytics' },
        { parent: 'UI Kit', label: 'Form Layout' },
        { parent: 'UI Kit', label: 'Input' },
        { parent: 'UI Kit', label: 'Float Label' },
        { parent: 'UI Kit', label: 'Invalid State' },
        { parent: 'UI Kit', label: 'Button' },
        { parent: 'UI Kit', label: 'Table' },
        { parent: 'UI Kit', label: 'List' },
        { parent: 'UI Kit', label: 'Panel' },
        { parent: 'UI Kit', label: 'Tree' },
        { parent: 'UI Kit', label: 'Overlay' },
        { parent: 'UI Kit', label: 'Menu' },
        { parent: 'UI Kit', label: 'Message' },
        { parent: 'UI Kit', label: 'File' },
        { parent: 'UI Kit', label: 'Chart' },
        { parent: 'UI Kit', label: 'Misc' },
        { parent: 'Utilities', label: 'Icons' },
        { parent: 'PrimeBlocks', label: 'Blocks' },
        { parent: 'Pages', label: 'Crud' },
        { parent: 'Pages', label: 'Calendar' },
        { parent: 'Pages', label: 'Timeline' },
        { parent: 'Pages', label: 'Invoice' },
        { parent: 'Pages', label: 'Login' },
        { parent: 'Pages', label: 'Help' },
        { parent: 'Pages', label: 'Empty' },
        { parent: 'Pages', label: 'Access' },
        { parent: 'Start', label: 'Documentation' }
    ];

    useEffect(() => {
        copyTooltipRef && copyTooltipRef.current && copyTooltipRef.current.updateTargetEvents();
    }, [location]);

    useEffect(() => {
        if (menuMode === 'overlay') {
            hideOverlayMenu()
        }
        if (menuMode === 'static') {
            setDesktopMenuActive(true)
        }
    }, [menuMode])

    useEffect(() => {
        onColorModeChange(colorMode)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const onMenuThemeChange = (theme) => {
        setMenuTheme(theme)
    }

    const onTopbarThemeChange = (theme) => {
        setTopbarTheme(theme);
    }

    useEffect(() => {
        const appLogoLink = document.getElementById('app-logo');

        if (topbarTheme === 'white' || topbarTheme === 'yellow' || topbarTheme === 'amber' || topbarTheme === 'orange' || topbarTheme === 'lime') {
            appLogoLink.src = 'assets/layout/images/logo-dark.svg';
        }
        else {
            appLogoLink.src = 'assets/layout/images/logo-light.svg';
        }
    }, [topbarTheme])

    const onThemeChange = (theme) => {
        setTheme(theme);
        const themeLink = document.getElementById('theme-css');
        const themeHref = 'assets/theme/' + theme + '/theme-' + colorMode + '.css';
        replaceLink(themeLink, themeHref);
    }

    const onColorModeChange = (mode) => {
        setColorMode(mode);
        setIsInputBackgroundChanged(true);

        if (isInputBackgroundChanged) {
            if (mode === 'dark') {
                setInputStyle('filled');
            } else {
                setInputStyle('outlined')
            }
        }

        if (mode === 'dark') {
            setMenuTheme('dark');
            setTopbarTheme('dark');
        } else {
            setMenuTheme('light');
            setTopbarTheme('blue');

        }

        const layoutLink = document.getElementById('layout-css');
        const layoutHref = 'assets/layout/css/layout-' + mode + '.css';
        replaceLink(layoutLink, layoutHref);

        const themeLink = document.getElementById('theme-css');
        const urlTokens = themeLink.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = 'theme-' + mode + '.css';
        const newURL = urlTokens.join('/');

        replaceLink(themeLink, newURL, () => {
            setNewThemeLoaded(true);
        });

    }

    const replaceLink = (linkElement, href, callback) => {
        if (isIE()) {
            linkElement.setAttribute('href', href);

            if (callback) {
                callback();
            }
        }
        else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);

                if (callback) {
                    callback();
                }
            });
        }
    }

    const onInputStyleChange = (inputStyle) => {
        setInputStyle(inputStyle);
    }

    const onRipple = (e) => {
        PrimeReact.ripple = e.value;
        setRipple(e.value);
    }

    const onInlineMenuPositionChange = (mode) => {
        setInlineMenuPosition(mode)
    }

    const onMenuModeChange = (mode) => {
        setMenuMode(mode);
    }

    const onRTLChange = () => {
        setRTL(prevState => !prevState);
    }

    const onMenuClick = (event) => {
        menuClick = true;
    }

    const onMenuButtonClick = (event) => {
        menuClick = true;

        if (isDesktop())
            setDesktopMenuActive((prevState) => !prevState);
        else
            setMobileMenuActive((prevState) => !prevState)

        event.preventDefault();

    }

    const onTopbarItemClick = (event) => {
        topbarItemClick = true;
        if (activeTopbarItem === event.item)
            setActiveTopbarItem(null)
        else {
            setActiveTopbarItem(event.item)
        }

        event.originalEvent.preventDefault();
    }

    const onSearch = (event) => {
        searchClick = true;
        setSearchActive(event);
    }

    const onMenuItemClick = (event) => {
        if (!event.item.items && (menuMode === 'overlay' || !isDesktop())) {
            hideOverlayMenu();
        }

        if (!event.item.items && (isHorizontal() || isSlim())) {
            setMenuActive(false)
        }
    }

    const onRootMenuItemClick = (event) => {
        setMenuActive((prevState) => !prevState);
    }

    const onRightMenuButtonClick = () => {
        setRightMenuActive((prevState) => !prevState)
    }

    const onMobileTopbarButtonClick = (event) => {
        setMobileTopbarActive((prevState) => !prevState);
        event.preventDefault();
    }

    const onDocumentClick = (event) => {
        if (!searchClick && event.target.localName !== 'input') {
            setSearchActive(false);
        }

        if (!topbarItemClick) {
            setActiveTopbarItem(null);
        }

        if (!menuClick && (menuMode === 'overlay' || !isDesktop())) {
            if (isHorizontal() || isSlim()) {
                setMenuActive(false)
            }
            hideOverlayMenu();
        }

        if (inlineMenuActive[currentInlineMenuKey.current] && !inlineMenuClick) {
            let menuKeys = { ...inlineMenuActive };
            menuKeys[currentInlineMenuKey.current] = false;
            setInlineMenuActive(menuKeys);
        }

        if (!menuClick && (isSlim() || isHorizontal())) {
            setMenuActive(false);
        }

        searchClick = false;
        topbarItemClick = false;
        inlineMenuClick = false;
        menuClick = false;
    }

    const hideOverlayMenu = () => {
        setMobileMenuActive(false)
        setDesktopMenuActive(false)
    }

    const isDesktop = () => {
        return window.innerWidth > 1024;
    }

    const isHorizontal = () => {
        return menuMode === 'horizontal';
    }

    const isSlim = () => {
        return menuMode === 'slim';
    }

    const isIE = () => {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent)
    }

    const onInlineMenuClick = (e, key) => {
        let menuKeys = { ...inlineMenuActive };
        if (key !== currentInlineMenuKey.current && currentInlineMenuKey.current) {
            menuKeys[currentInlineMenuKey.current] = false;
        }

        menuKeys[key] = !menuKeys[key];
        setInlineMenuActive(menuKeys);
        currentInlineMenuKey.current = key;
        inlineMenuClick = true;
    }

    const layoutContainerClassName = classNames('layout-wrapper ', 'layout-menu-' + menuTheme + ' layout-topbar-' + topbarTheme, {
        'layout-menu-static': menuMode === 'static',
        'layout-menu-overlay': menuMode === 'overlay',
        'layout-menu-slim': menuMode === 'slim',
        'layout-menu-horizontal': menuMode === 'horizontal',
        'layout-menu-active': desktopMenuActive,
        'layout-menu-mobile-active': mobileMenuActive,
        'layout-topbar-mobile-active': mobileTopbarActive,
        'layout-rightmenu-active': rightMenuActive,
        'p-input-filled': inputStyle === 'filled',
        'p-ripple-disabled': !ripple,
        'layout-rtl': isRTL
    });


    return (
        <RTLContext.Provider value={isRTL}>
            <div className={layoutContainerClassName} onClick={onDocumentClick}>
                <Tooltip ref={copyTooltipRef} target=".block-action-copy" position="bottom" content="Copied to clipboard" event="focus" />

                <AppTopbar horizontal={isHorizontal()}
                    activeTopbarItem={activeTopbarItem}
                    onMenuButtonClick={onMenuButtonClick}
                    onTopbarItemClick={onTopbarItemClick}
                    onRightMenuButtonClick={onRightMenuButtonClick}
                    onMobileTopbarButtonClick={onMobileTopbarButtonClick} mobileTopbarActive={mobileTopbarActive}
                    searchActive={searchActive} onSearch={onSearch} />

                <div className="menu-wrapper" onClick={onMenuClick}>
                    <div className="layout-menu-container">
                        {(inlineMenuPosition === 'top' || inlineMenuPosition === 'both') && <AppInlineMenu menuKey="top" inlineMenuActive={inlineMenuActive} onInlineMenuClick={onInlineMenuClick} horizontal={isHorizontal()} menuMode={menuMode} />}
                        <AppMenu model={menu} onMenuItemClick={onMenuItemClick} onRootMenuItemClick={onRootMenuItemClick}
                            menuMode={menuMode} active={menuActive} />
                        {(inlineMenuPosition === 'bottom' || inlineMenuPosition === 'both') && <AppInlineMenu menuKey="bottom" inlineMenuActive={inlineMenuActive} onInlineMenuClick={onInlineMenuClick} horizontal={isHorizontal()} menuMode={menuMode} />}
                    </div>
                </div>

                <div className="layout-main">

                    <AppBreadcrumb routes={routes} />

                    <div className="layout-content">
                        <Route path="/" exact render={() => <Dashboard colorMode={colorMode} isNewThemeLoaded={newThemeLoaded} onNewThemeChange={e => setNewThemeLoaded(e)} location={location} />} />
                        <Route path="/start/documentation" component={Documentation} />
                        <Route path="/favorites/dashboardanalytics" render={() => <DashboardAnalytics colorMode={colorMode} isNewThemeLoaded={newThemeLoaded} onNewThemeChange={e => setNewThemeLoaded(e)} location={location} />} />
                        <Route path="/uikit/formlayout" component={FormLayoutDemo} />
                        <Route path="/uikit/floatlabel" component={FloatLabelDemo} />
                        <Route path="/uikit/input" component={InputDemo} />
                        <Route path="/uikit/invalidstate" component={InvalidStateDemo} />
                        <Route path="/uikit/button" component={ButtonDemo} />
                        <Route path="/uikit/table" component={TableDemo} />
                        <Route path="/uikit/list" component={ListDemo} />
                        <Route path="/uikit/tree" component={TreeDemo} />
                        <Route path="/uikit/panel" component={PanelDemo} />
                        <Route path="/uikit/overlay" component={OverlayDemo} />
                        <Route path="/uikit/menu" component={MenuDemo} />
                        <Route path="/uikit/message" component={MessagesDemo} />
                        <Route path="/uikit/file" component={FileDemo} />
                        <Route path="/uikit/chart" render={() => <ChartDemo colorMode={colorMode} isNewThemeLoaded={newThemeLoaded} onNewThemeChange={e => setNewThemeLoaded(e)} location={location} />} />
                        <Route path="/uikit/misc" component={MiscDemo} />
                        <Route path="/primeblocks/blocks" component={BlocksDemo} />
                        <Route path="/utilities/icons" component={IconsDemo} />
                        <Route path="/pages/crud" component={Crud} />
                        <Route path="/pages/calendar" component={Calendar} />
                        <Route path="/pages/help" component={Help} />
                        <Route path="/pages/invoice" component={Invoice} />
                        <Route path="/pages/empty" component={EmptyPage} />
                        <Route path="/pages/timeline" component={TimelineDemo} />

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
                    isRTL={isRTL} onRTLChange={onRTLChange} />

                <AppRightMenu rightMenuActive={rightMenuActive} onRightMenuButtonClick={onRightMenuButtonClick} />

                {mobileMenuActive && <div className="layout-mask modal-in"></div>}
            </div>
        </RTLContext.Provider>
    );

}

export default App;
