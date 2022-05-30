import React, { useState, useEffect, useContext } from 'react';
import { classNames } from 'primereact/utils';
import { RadioButton } from 'primereact/radiobutton';
import { InputSwitch } from 'primereact/inputswitch';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { RTLContext } from './App';

const AppConfig = (props) => {

    const [active, setActive] = useState(false);
    const [scale, setScale] = useState(14);
    const isRTL = useContext(RTLContext);
    const scales = [12, 13, 14, 15, 16];

    const themes = [
        { name: 'indigo', color: '#2f8ee5' },
        { name: 'pink', color: '#E91E63' },
        { name: 'purple', color: '#9C27B0' },
        { name: 'deeppurple', color: '#673AB7' },
        { name: 'blue', color: '#2196F3' },
        { name: 'lightblue', color: '#03A9F4' },
        { name: 'cyan', color: '#00BCD4' },
        { name: 'teal', color: '#009688' },
        { name: 'green', color: '#4CAF50' },
        { name: 'lightgreen', color: '#8BC34A' },
        { name: 'lime', color: '#CDDC39' },
        { name: 'yellow', color: '#FFEB3B' },
        { name: 'amber', color: '#FFC107' },
        { name: 'orange', color: '#FF9800' },
        { name: 'deeporange', color: '#FF5722' },
        { name: 'brown', color: '#795548' },
        { name: 'bluegrey', color: '#607D8B' }
    ];

    const menuThemes = [
        { name: 'light', color: '#FDFEFF' },
        { name: 'dark', color: '#434B54' },
        { name: 'indigo', color: '#1A237E' },
        { name: 'bluegrey', color: '#37474F' },
        { name: 'brown', color: '#4E342E' },
        { name: 'cyan', color: '#006064' },
        { name: 'green', color: '#2E7D32' },
        { name: 'deeppurple', color: '#4527A0' },
        { name: 'deeporange', color: '#BF360C' },
        { name: 'pink', color: '#880E4F' },
        { name: 'purple', color: '#6A1B9A' },
        { name: 'teal', color: '#00695C' }
    ];

    const topbarThemes = [
        { name: 'lightblue', color: '#2E88FF' },
        { name: 'dark', color: '#363636' },
        { name: 'white', color: '#FDFEFF' },
        { name: 'blue', color: '#1565C0' },
        { name: 'deeppurple', color: '#4527A0' },
        { name: 'purple', color: '#6A1B9A' },
        { name: 'pink', color: '#AD1457' },
        { name: 'cyan', color: '#0097A7' },
        { name: 'teal', color: '#00796B' },
        { name: 'green', color: '#43A047' },
        { name: 'lightgreen', color: '#689F38' },
        { name: 'lime', color: '#AFB42B' },
        { name: 'yellow', color: '#FBC02D' },
        { name: 'amber', color: '#FFA000' },
        { name: 'orange', color: '#FB8C00' },
        { name: 'deeporange', color: '#D84315' },
        { name: 'brown', color: '#5D4037' },
        { name: 'grey', color: '#616161' },
        { name: 'bluegrey', color: '#546E7A' },
        { name: 'indigo', color: '#3F51B5' }
    ];

    const decrementScale = () => {
        setScale((prevState) => prevState - 1);
    }

    const incrementScale = () => {
        setScale((prevState) => prevState + 1);
    }

    const applyScale = () => {
        document.documentElement.style.fontSize = scale + 'px';
    };

    useEffect(() => {
        applyScale();
    }, [scale]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <Sidebar appendTo="self" visible={active} onHide={() => setActive(false)} position={isRTL ? 'left' : 'right'} blockScroll={true} showCloseIcon={false} baseZIndex={1000} className="layout-config p-sidebar-sm fs-small p-p-0">

                <div className="layout-config-panel flex flex-column">
                    <div className="px-3 pt-3">
                        <h5>Theme Customization</h5>
                        <span>Ultima offers different themes for layout, topbar, menu etc.</span>
                    </div>

                    <hr className="mb-0" />

                    <div className="layout-config-options p-3">

                        <h6>Layout/Theme Scale</h6>
                        <div className="flex align-items-center">
                            <Button type="button" icon="pi pi-minus" onClick={() => decrementScale()} className="p-button-rounded p-button-text" disabled={scale === scales[0]}></Button>
                            {
                                scales.map((s, i) => {
                                    return <i key={i} className={classNames('pi pi-circle-fill m-1 scale-icon', { 'scale-active': s === scale })}></i>
                                })
                            }
                            <Button type="button" icon="pi pi-plus" onClick={() => incrementScale()} className="p-button-rounded p-button-text" disabled={scale === scales[scales.length - 1]}></Button>
                        </div>

                        <h6>Layout Mode</h6>
                        <div className="flex">
                            <div className="flex align-items-center">
                                <RadioButton id="light" name="darkMenu" value="light" checked={props.colorMode === 'light'} onChange={(e) => props.onColorModeChange(e.value)} />
                                <label htmlFor="light" className={classNames({ 'ml-2': !isRTL, 'mr-2': isRTL })}>Light</label>
                            </div>
                            <div className={classNames('flex align-items-center', { 'ml-4': !isRTL, 'mr-4': isRTL })}>
                                <RadioButton id="dark" name="darkMenu" value="dark" checked={props.colorMode === 'dark'} onChange={(e) => props.onColorModeChange(e.value)}  />
                                <label htmlFor="dark" className={classNames({ 'ml-2': !isRTL, 'mr-2': isRTL })}>Dark</label>
                            </div>
                        </div>

                        <h6>Menu Mode</h6>
                        <div className="flex">
                            <div className="flex flex-column">
                                <div className="flex align-items-center">
                                    <RadioButton id="static" name="menuMode" value="static" checked={props.menuMode === 'static'} onChange={(e) => props.onMenuModeChange(e.value)} />
                                    <label htmlFor="static" className={classNames({ 'ml-2': !isRTL, 'mr-2': isRTL })}>Static</label>
                                </div>
                                <div className="flex align-items-center mt-3">
                                    <RadioButton id="horizontal" name="menuMode" value="horizontal" checked={props.menuMode === 'horizontal'} onChange={(e) => props.onMenuModeChange(e.value)} />
                                    <label htmlFor="horizontal" className={classNames({ 'ml-2': !isRTL, 'mr-2': isRTL })}>Horizontal</label>
                                </div>
                            </div>
                            <div className={classNames('flex flex-column', { 'ml-4': !isRTL, 'mr-4': isRTL })}>
                                <div className="flex align-items-center">
                                    <RadioButton id="overlay" name="menuMode" value="overlay" checked={props.menuMode === 'overlay'} onChange={(e) => props.onMenuModeChange(e.value)} />
                                    <label htmlFor="overlay" className={classNames({ 'ml-2': !isRTL, 'mr-2': isRTL })}>Overlay</label>
                                </div>
                                <div className="flex align-items-center mt-3">
                                    <RadioButton id="slim" name="menuMode" value="slim" checked={props.menuMode === 'slim'} onChange={(e) => props.onMenuModeChange(e.value)} />
                                    <label htmlFor="slim" className={classNames({ 'ml-2': !isRTL, 'mr-2': isRTL })}>Slim</label>
                                </div>
                            </div>
                        </div>

                        <h6>Inline Menu Position</h6>
                        <div className="flex">
                            <div className="flex align-items-center">
                                <RadioButton id="top" name="inlineMenuPosition" value="top" checked={props.inlineMenuPosition === 'top'} onChange={(e) => props.onInlineMenuPositionChange(e.value)} />
                                <label htmlFor="top" className={classNames({ 'ml-2': !isRTL, 'mr-2': isRTL })}>Top</label>
                            </div>
                            <div className={classNames('flex align-items-center', { 'ml-4': !isRTL, 'mr-4': isRTL })}>
                                <RadioButton id="bottom" name="inlineMenuPosition" value="bottom" checked={props.inlineMenuPosition === 'bottom'} onChange={(e) => props.onInlineMenuPositionChange(e.value)} />
                                <label htmlFor="bottom" className={classNames({ 'ml-2': !isRTL, 'mr-2': isRTL })}>Bottom</label>
                            </div>
                            <div className={classNames('flex align-items-center', { 'ml-4': !isRTL, 'mr-4': isRTL })}>
                                <RadioButton id="both" name="inlineMenuPosition" value="both" checked={props.inlineMenuPosition === 'both'} onChange={(e) => props.onInlineMenuPositionChange(e.value)} />
                                <label htmlFor="both" className={classNames({ 'ml-2': !isRTL, 'mr-2': isRTL })}>Both</label>
                            </div>
                        </div>

                        <h6>Input Background</h6>
                        <div className="p-formgroup-inline">
                            <div className="flex">
                                <div className="flex align-items-center">
                                    <RadioButton id="input_outlined" name="inputstyle" value="outlined" checked={props.inputStyle === 'outlined'} onChange={(e) => props.onInputStyleChange(e.value)} />
                                    <label htmlFor="input_outlined" className={classNames({ 'ml-2': !isRTL, 'mr-2': isRTL })}>Outlined</label>
                                </div>
                                <div className={classNames('flex align-items-center', { 'ml-4': !isRTL, 'mr-4': isRTL })}>
                                    <RadioButton id="input_filled" name="inputstyle" value="filled" checked={props.inputStyle === 'filled'} onChange={(e) => props.onInputStyleChange(e.value)} />
                                    <label htmlFor="input_filled" className={classNames({ 'ml-2': !isRTL, 'mr-2': isRTL })}>Filled</label>
                                </div>
                            </div>
                        </div>

                        <h6>Ripple Effect</h6>
                        <InputSwitch checked={props.rippleEffect} onChange={props.onRippleEffect} />

                        <h6>RTL</h6>
                        <InputSwitch checked={props.isRTL} onChange={props.onRTLChange} />

                        <h6>Menu Themes</h6>
                        {props.colorMode !== 'dark' && <div className="grid">
                            {
                                menuThemes.map((t, i) => {
                                    return <div key={i} className="col col-fixed">
                                        <button type="button" style={{ cursor: 'pointer' }} onClick={() => props.onMenuThemeChange(t.name)} className="layout-config-color-option p-link" title={t.name} >
                                            <span className="color" style={{ backgroundColor: t.color }}></span>
                                            {props.menuTheme === t.name && <span className="check flex align-items-center justify-content-center">
                                                <i className="pi pi-check" style={{ color: 'var(--menu-text-color)' }}></i>
                                            </span>}
                                        </button>
                                    </div>
                                })
                            }
                        </div>}
                        {props.colorMode === 'dark' && <p>Menu themes are only available in light mode by design as large surfaces can emit too much brightness in dark mode.</p>}

                        <h6>Topbar Themes</h6>
                        <div className="grid">
                            {
                                topbarThemes.map((t, i) => {
                                    return <div key={i} className="col col-fixed">
                                        <button type="button" style={{ cursor: 'pointer' }} onClick={() => props.onTopbarThemeChange(t.name)} className="layout-config-color-option p-link" title={t.name} >
                                            <span className="color" style={{ backgroundColor: t.color }}></span>
                                            {props.topbarTheme === t.name && <span className="check flex align-items-center justify-content-center">
                                                <i className="pi pi-check" style={{ color: 'var(--topbar-text-color)' }} ></i>
                                            </span>}
                                        </button>
                                    </div>
                                })
                            }
                        </div>

                        <h6>Component Themes</h6>
                        <div className="grid">
                            {
                                themes.map((t, i) => {
                                    return <div key={i} className="col col-fixed">
                                        <button type="button" style={{ cursor: 'pointer' }} onClick={() => props.onThemeChange(t.name)} className="layout-config-color-option p-link" title={t.name} >
                                            <span className="color" style={{ backgroundColor: t.color }}></span>
                                            {props.theme === t.name && <span className="check flex align-items-center justify-content-center">
                                                <i className="pi pi-check" style={{ color: 'var(--primary-color-text)' }}></i>
                                            </span>}
                                        </button>
                                    </div>
                                })
                            }
                        </div>

                    </div>
                </div>
            </Sidebar>
            {!active && <Button className="layout-config-button" icon="pi pi-cog p-button-icon" type="button" onClick={() => setActive(true)}></Button>}
        </>
    );

}

export default AppConfig;
