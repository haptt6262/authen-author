import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import * as pages from '../pages'
import Auth from './Auth'

export default function Navbar() {
    return (
        <div>
            <BrowserRouter>
                <Auth>
                    <Routes>
                        <Route path='/login' element={<pages.LoginPage />} />
                        <Route path='/home' element={<pages.UserPage />} />
                        <Route path='/register' element={<pages.RegisterPage />} />
                        <Route path="*" element={<Navigate to="/login" replace />} />
                    </Routes>
                </Auth>
            </BrowserRouter>
        </div>
    )
}