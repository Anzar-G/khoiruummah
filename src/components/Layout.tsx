import { Outlet } from 'react-router-dom';
import AppSidebar from './Sidebar';

export default function Layout() {
    return (
        <AppSidebar>
            <Outlet />
        </AppSidebar>
    );
}
