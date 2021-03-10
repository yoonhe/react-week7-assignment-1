import React from 'react';

export default function LoginForm() {
  return (
    <form>
      <div>
        <label htmlFor="input-email">E-mail</label>
        <input
          type="email"
          name="email"
          id="input-email"
          placeholder="email"
        />
      </div>
      <div>
        <label htmlFor="input-password">Password</label>
        <input
          type="password"
          name="password"
          id="input-password"
          placeholder="password"
        />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}