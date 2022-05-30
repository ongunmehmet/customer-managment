import React, { useContext } from 'react';
import { classNames } from 'primereact/utils';
import { Sidebar } from 'primereact/sidebar';
import { RTLContext } from './App';

const AppRightMenu = (props) => {

    const isRTL = useContext(RTLContext);

    return <Sidebar appendTo="self" visible={props.rightMenuActive} onHide={props.onRightMenuButtonClick} position={isRTL ? 'left' : 'right'} blockScroll={true} showCloseIcon={false} baseZIndex={1000} className={classNames('layout-rightmenu p-sidebar-sm fs-small py-3', isRTL ? 'pl-0 pr-3' : 'pl-3 pr-0')}>
        <div className={classNames('online-members flex flex-column mt-3', { 'ml-3': !isRTL, 'mr-3': isRTL })}>
            <h6 className="header">ONLINE MEMBERS</h6>
            <div className="flex flex-row flex-wrap">
                <img className="m-1" src="assets/demo/images/avatar/avatar-1.png" alt="avatar-1" />
                <img className="m-1" src="assets/demo/images/avatar/avatar-2.png" alt="avatar-2" />
                <img className="m-1" src="assets/demo/images/avatar/avatar-3.png" alt="avatar-3" />
                <img className="m-1" src="assets/demo/images/avatar/avatar-4.png" alt="avatar-4" />
                <img className="m-1" src="assets/demo/images/avatar/avatar-5.png" alt="avatar-5" />
                <img className="m-1" src="assets/demo/images/avatar/avatar-6.png" alt="avatar-6" />
                <img className="m-1" src="assets/demo/images/avatar/avatar-7.png" alt="avatar-7" />
                <img className="m-1" src="assets/demo/images/avatar/avatar-8.png" alt="avatar-8" />
                <img className="m-1" src="assets/demo/images/avatar/avatar-9.png" alt="avatar-9" />
                <img className="m-1" src="assets/demo/images/avatar/avatar-10.png" alt="avatar-10" />
                <img className="m-1" src="assets/demo/images/avatar/avatar-11.png" alt="avatar-11" />
                <img className="m-1" src="assets/demo/images/avatar/avatar-12.png" alt="avatar-12" />
                <img className="m-1" src="assets/demo/images/avatar/avatar-13.png" alt="avatar-13" />
                <img className="m-1" src="assets/demo/images/avatar/avatar-14.png" alt="avatar-14" />
                <img className="m-1" src="assets/demo/images/avatar/avatar-15.png" alt="avatar-15" />
                <img className="m-1" src="assets/demo/images/avatar/avatar-16.png" alt="avatar-16" />
            </div>
            <span className="mt-3"><b>+19</b> Costumers</span>
        </div>
        <div className={classNames('latest-activity flex flex-column mt-6', { 'ml-3': !isRTL, 'mr-3': isRTL })}>
            <h6 className="header">LATEST ACTIVITY</h6>
            <div className="flex flex-row pt-2">
                <i className={classNames('pi pi-images align-self-start p-2', { 'mr-2': !isRTL, 'ml-2': isRTL })}></i>
                <div className="flex flex-column">
                    <span className="font-bold mb-1">New Sale</span>
                    <span className="mb-2">Richard Jones has purchased a blue t-shirt for $79.</span>
                    <span className="flex align-items-center">
                        <img className={classNames({ 'mr-2': !isRTL, 'ml-2': isRTL })} src="assets/demo/images/avatar/activity-1.png" alt="" />
                        <small className="muted-text">Emmy Adams, 21.40</small>
                    </span>
                </div>
            </div>
            <div className="flex flex-row pt-3">
                <i className={classNames('pi pi-images align-self-start p-2', { 'mr-2': !isRTL, 'ml-2': isRTL })}></i>
                <div className="flex flex-column">
                    <span className="font-bold mb-1">Withdrawal Initiated</span>
                    <span className="mb-2">Your request for withdrawal of $2500 has been initiated.</span>
                    <span className="flex align-items-center">
                        <img className={classNames({ 'mr-2': !isRTL, 'ml-2': isRTL })} src="assets/demo/images/avatar/activity-2.png" alt="avatar-2" />
                        <small className="muted-text">Emily Walter, 21.40</small>
                    </span>
                </div>
            </div>
            <div className="flex flex-row pt-3">
                <i className={classNames('pi pi-images align-self-start p-2', { 'mr-2': !isRTL, 'ml-2': isRTL })}></i>
                <div className="flex flex-column">
                    <span className="font-bold mb-1">Question Received</span>
                    <span className="mb-2">Jane Davis has posted a new question about your product.</span>
                    <span className="flex align-items-center">
                        <img className={classNames({ 'mr-2': !isRTL, 'ml-2': isRTL })} src="assets/demo/images/avatar/activity-3.png" alt="avatar-3" />
                        <small className="muted-text">Jane Davis, 21.45</small>
                    </span>
                </div>
            </div>
        </div >
        <div className={classNames('next-events flex flex-column mt-6', { 'ml-3': !isRTL, 'mr-3': isRTL })} >
            <h6 className="header">NEXT EVENTS</h6>
            <ul>
                <li><i className={classNames('pi pi-eye', { 'mr-3': !isRTL, 'ml-3': isRTL })}></i>A/B Test</li>
                <li><i className={classNames('pi pi-video', { 'mr-3': !isRTL, 'ml-3': isRTL })}></i>Video Shoot</li >
                <li><i className={classNames('pi pi-sitemap', { 'mr-3': !isRTL, 'ml-3': isRTL })}></i>Board Meeting</li >
                <li><i className={classNames('pi pi-compass', { 'mr-3': !isRTL, 'ml-3': isRTL })}></i>Q4 Planning</li >
                <li><i className={classNames('pi pi-palette', { 'mr-3': !isRTL, 'ml-3': isRTL })}></i>Design Training</li >
            </ul >
        </div >
    </Sidebar >

}

export default AppRightMenu;
