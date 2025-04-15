'use client';
import Link from 'next/link';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { navLinks } from '@/data/header-data';

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	return (
		<div
			className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''
				}`}
		>
			<div className="mobile-header-wrapper-inner">
				<div className="mobile-header-logo">
					<Link className="d-flex main-logo align-items-center d-inline-flex" href="/">
						<img
							src="https://s3.us-east-1.amazonaws.com/sarmedrizvi.com/SR+Logo.svg"
							alt="SR logo"
							style={{ width: '40px', height: '40px' }}
						/>
						<span className="fs-4 ms-2 text-dark">Sarmed.dev</span>
					</Link>
					<div
						className={`burger-icon burger-icon-white border rounded-3 ${isMobileMenu ? 'burger-close' : ''
							}`}
						onClick={handleMobileMenu}
					>
						<span className="burger-icon-top" />
						<span className="burger-icon-mid" />
						<span className="burger-icon-bottom" />
					</div>
				</div>
				<div className="mobile-header-content-area">
					<PerfectScrollbar className="perfect-scroll">
						<div className="mobile-menu-wrap mobile-header-border">
							<nav>
								<ul className="mobile-menu font-heading ps-0">
									{navLinks.map(({ href, label }, index) => (
										<li key={href} className="nav-item">
											<Link
												className={`nav-link ${index === 0 ? 'active' : ''}`}
												href={href}
												onClick={handleMobileMenu}
											>
												{label}
											</Link>
										</li>
									))}
								</ul>
							</nav>
						</div>
					</PerfectScrollbar>
				</div>
			</div>
		</div>
	);
}
