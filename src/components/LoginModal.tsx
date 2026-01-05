'use client';

import { useState } from 'react';
import Button from './Button';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Funcionalidade de login será implementada posteriormente
    console.log('Login:', { email, password });
  };

  const handleForgotPassword = () => {
    // Funcionalidade de recuperação de senha será implementada posteriormente
    console.log('Esqueci minha senha');
  };

  const handleCreateAccount = () => {
    // Funcionalidade de criar conta será implementada posteriormente
    console.log('Criar conta');
  };

  return (
    <div 
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full border border-gray-100 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Entrar
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Fechar modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email ou Login
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#011a5a] focus:border-transparent text-gray-900 placeholder-gray-400 bg-white transition-all"
              placeholder="Digite seu email ou login"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#011a5a] focus:border-transparent text-gray-900 placeholder-gray-400 bg-white transition-all"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-[#011a5a] hover:text-[#010f3d] font-medium transition-colors"
            >
              Esqueci minha senha
            </button>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              className="w-full"
            >
              Entrar
            </Button>
          </div>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600 mb-4">
            Ainda não tem uma conta?
          </p>
          <Button
            type="button"
            variant="outline"
            onClick={handleCreateAccount}
            className="w-full"
          >
            Criar Conta
          </Button>
        </div>
      </div>
    </div>
  );
}

