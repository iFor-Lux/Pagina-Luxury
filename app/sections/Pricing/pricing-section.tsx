"use client";

import { useState } from "react";

export default function PricingSection() {

  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-[#070708] to-black">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 style={{fontFamily: 'SF Regular, sans-serif'}} className="text-5xl md:text-6xl font-light tracking-wider text-white mb-6">
            Precios
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-60 mb-6"></div>
          <p style={{
            fontSize: '1rem',
            color: 'rgb(212 212 212)',
            fontFamily: 'Apple, sans-serif'
          }}>
            Siempre entregando lo mejor del mercado al menor precio.
          </p>
          

        </div>
        
        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Basic Plan */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-300 flex flex-col h-full">
            {/* Plan Header */}
            <div className="text-left mb-6">
              <h3 style={{fontFamily: 'SF Regular, sans-serif'}} className="text-4xl font-bold text-white mb-2">Free</h3>
                              <div style={{fontFamily: 'SF Regular, sans-serif'}} className="text-xl font-medium text-white/60 mb-2">
                  $0/mo
                </div>
            </div>
            
            {/* Separator */}
            <div className="w-full h-px bg-white/30 mb-6"></div>
            
            {/* Features List */}
            <div className="flex-1 mb-6">
              <ul className="space-y-4">
                <li className="flex items-center text-white/80">
                  <svg className="w-3 h-3 text-white mr-3 flex-shrink-0" data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color: 'currentcolor'}}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" fill="currentColor"></path>
                  </svg>
                  <span>Aimbot Basico</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-3 h-3 text-white mr-3 flex-shrink-0" data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color: 'currentcolor'}}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" fill="currentColor"></path>
                  </svg>
                  <span>Semi Holograma</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-3 h-3 text-white mr-3 flex-shrink-0" data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color: 'currentcolor'}}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" fill="currentColor"></path>
                  </svg>
                  <span>Asistencia de tiro basico</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-3 h-3 text-white mr-3 flex-shrink-0" data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color: 'currentcolor'}}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" fill="currentColor"></path>
                  </svg>
                  <span>Eliminar reportes manual</span>
                </li>
              </ul>
            </div>
            
            {/* Separator */}
            <div className="w-full h-px bg-white/30 mb-6"></div>
            
            {/* CTA Button */}
            <button style={{fontFamily: 'SF Regular, sans-serif'}} className="w-full py-3 border border-white/30 text-white font-medium tracking-wider hover:bg-white/10 transition-all duration-300 backdrop-blur-sm rounded-lg transform hover:shadow-[0_0_24px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/30">
              Descargar
            </button>
          </div>

          {/* Pro Plan - Featured */}
          <div 
            className="backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
            style={{
              background: 'linear-gradient(rgb(255, 255, 255) 0%, rgb(0, 0, 0) 0%, rgb(42, 21, 77) 100%)',
              boxShadow: 'rgba(140, 69, 255, 0.3) 0px 10px 70px 10px'
            }}
          >
            {/* Popular Badge */}
            <div className="absolute top-8 right-8">
              <span style={{fontFamily: 'SF Regular, sans-serif'}} className="bg-purple-500 text-white px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                POPULAR
              </span>
            </div>
            
            {/* Plan Header */}
            <div className="text-left mb-6">
              <h3 style={{fontFamily: 'SF Regular, sans-serif'}} className="text-4xl font-bold text-white mb-2">Pro</h3>
                              <div style={{fontFamily: 'SF Regular, sans-serif'}} className="text-xl font-medium text-white/60 mb-2">
                  $10/mo
                </div>
            </div>
            
            {/* Separator */}
            <div className="w-full h-px bg-white/30 mb-6"></div>
            
            {/* Features List */}
            <div className="flex-1 mb-6">
              <ul className="space-y-4">
                <li className="flex items-center text-white/80">
                  <svg className="w-3 h-3 text-white mr-3 flex-shrink-0" data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color: 'currentcolor'}}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" fill="currentColor"></path>
                  </svg>
                  <span>Aimbot Pro</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-3 h-3 text-white mr-3 flex-shrink-0" data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color: 'currentcolor'}}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" fill="currentColor"></path>
                  </svg>
                  <span>Holograma avanzado</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-3 h-3 text-white mr-3 flex-shrink-0" data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color: 'currentcolor'}}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" fill="currentColor"></path>
                  </svg>
                  <span>Aim Assist</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-3 h-3 text-green-500 mr-3 flex-shrink-0" data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color: 'currentcolor'}}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" fill="currentColor"></path>
                  </svg>
                  <span>Eliminar reportes automatico</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-3 h-3 text-green-500 mr-3 flex-shrink-0" data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color: 'currentcolor'}}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" fill="currentColor"></path>
                  </svg>
                  <span>Antiban & Antiblacklist</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-3 h-3 text-green-500 mr-3 flex-shrink-0" data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color: 'currentcolor'}}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" fill="currentColor"></path>
                  </svg>
                  <span>Soporte 24/7</span>
                </li>
              </ul>
            </div>
            
            {/* Separator */}
            <div className="w-full h-px bg-white/30 mb-6"></div>
            
            {/* CTA Button */}
            <button style={{fontFamily: 'SF Regular, sans-serif'}} className="w-full py-3 bg-purple-500 text-white font-medium tracking-wider rounded-lg transition-all duration-300 transform hover:bg-purple-600 hover:shadow-[0_0_24px_rgba(168,85,247,0.6)] hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50">
              Comprar
            </button>
            
            {/* Pattern overlay */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-30 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='64' height='64' fill='none' stroke='rgba(255,255,255,0.1)'%3e%3cpath d='M0 0L64 0L64 64L0 64Z' fill='transparent'/%3e%3cpath d='M0 0L64 0M0 0L0 64' stroke-width='0.5'/%3e%3c/svg%3e")`,
                backgroundSize: '63.20px auto',
                backgroundRepeat: 'repeat',
                backgroundPosition: 'left top'
              }}
            />
          </div>

          {/* Business Plan */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-300 flex flex-col h-full">
            {/* Plan Header */}
            <div className="text-left mb-6">
              <h3 style={{fontFamily: 'SF Regular, sans-serif'}} className="text-4xl font-bold text-white mb-2">Monster</h3>
                              <div style={{fontFamily: 'SF Regular, sans-serif'}} className="text-xl font-medium text-white/60 mb-2">
                  $20/mo
                </div>
            </div>
            
            {/* Separator */}
            <div className="w-full h-px bg-white/30 mb-6"></div>
            
            {/* Features List */}
            <div className="flex-1 mb-6">
              <ul className="space-y-4">
                <li className="flex items-center text-white/80">
                  <svg className="w-3 h-3 text-green-500 mr-3 flex-shrink-0" data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color: 'currentcolor'}}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" fill="currentColor"></path>
                  </svg>
                  <span>Aimbot 100%</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-3 h-3 text-green-500 mr-3 flex-shrink-0" data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color: 'currentcolor'}}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" fill="currentColor"></path>
                  </svg>
                  <span>Holograma 100%</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-3 h-3 text-green-500 mr-3 flex-shrink-0" data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color: 'currentcolor'}}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" fill="currentColor"></path>
                  </svg>
                  <span>Auto apuntado</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-3 h-3 text-green-500 mr-3 flex-shrink-0" data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color: 'currentcolor'}}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" fill="currentColor"></path>
                  </svg>
                  <span>No recoil</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-3 h-3 text-green-500 mr-3 flex-shrink-0" data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color: 'currentcolor'}}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" fill="currentColor"></path>
                  </svg>
                  <span>Wall hack</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-3 h-3 text-green-500 mr-3 flex-shrink-0" data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color: 'currentcolor'}}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" fill="currentColor"></path>
                  </svg>
                  <span>Anti reportes</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-3 h-3 text-green-500 mr-3 flex-shrink-0" data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color: 'currentcolor'}}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" fill="currentColor"></path>
                  </svg>
                  <span>Antiban & Antiblacklist 100%</span>
                </li>
                <li className="flex items-center text-white/80">
                  <svg className="w-3 h-3 text-green-500 mr-3 flex-shrink-0" data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{color: 'currentcolor'}}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z" fill="currentColor"></path>
                  </svg>
                  <span>Soporte privilegiado</span>
                </li>
              </ul>
            </div>
            
            {/* Separator */}
            <div className="w-full h-px bg-white/30 mb-6"></div>
            
            {/* CTA Button */}
            <button style={{fontFamily: 'SF Regular, sans-serif'}} className="w-full py-3 border border-white/30 text-white font-medium tracking-wider hover:bg-white/10 transition-all duration-300 backdrop-blur-sm rounded-lg transform hover:shadow-[0_0_24px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/30">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
