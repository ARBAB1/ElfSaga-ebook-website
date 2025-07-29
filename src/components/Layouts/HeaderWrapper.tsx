'use client';

import Header from './header';

export default function HeaderWrapper() {
  return (
    <Header
      onLogout={() => {
        localStorage.removeItem('isLoggedIn');
        window.location.href = '/';
      }}
    />
  );
}
