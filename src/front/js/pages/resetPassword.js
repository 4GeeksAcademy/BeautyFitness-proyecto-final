import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get('token'); // Extrae el token de los parámetros de la URL

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://didactic-winner-x5rrg7q5wjxjhpj44-3001.app.github.dev/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Incluye el token en la cabecera de autorización
                },
                body: JSON.stringify({ password }),
            });

            const data = await response.json();
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your password has been reset.',
                });
                navigate('/login');
            } else {
                throw new Error(data.msg || 'Something went wrong!');
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message || 'Something went wrong!',
            });
        }
    };

    return (
        <div className="text-center my-5">
            <form className="my-5 d-flex flex-column justify-content-center align-items-center bg-dark text-light" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">New Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Reset Password</button>
            </form>
        </div>
    );
};
