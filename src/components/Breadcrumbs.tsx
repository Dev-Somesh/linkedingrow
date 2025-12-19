import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    if (pathnames.length === 0) return null;

    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link
                        to="/"
                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                    >
                        <Home className="w-4 h-4 mr-2" />
                        Home
                    </Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <li key={to}>
                            <div className="flex items-center">
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                                <Link
                                    to={to}
                                    className={`ml-1 text-sm font-medium md:ml-2 ${isLast
                                            ? 'text-gray-500 pointer-events-none dark:text-gray-400'
                                            : 'text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
                                        }`}
                                    aria-current={isLast ? 'page' : undefined}
                                >
                                    {value.charAt(0).toUpperCase() + value.slice(1)}
                                </Link>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};
