'use client'
import { FC, useEffect } from 'react'
import NProgress from 'nprogress'
import { variables } from '@/utils/variables'

const config = {
  color: variables.colors.amber600,
  height: 2,
  shallowRouting: false
}
export const AppProgressBar: FC = () => {
  const styles = (
    <style>
      {`
				#nprogress {
					pointer-events: none;
				}
				
				#nprogress .bar {
					height: ${config.height}px;
					background: ${config.color};
					box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
					position: fixed;
					z-index: 1031;
					top: 0;
					left: 0;
					width: 100%;
				}
				
				/* Fancy blur effect */
				#nprogress .peg {
					display: block;
					position: absolute;
					right: 0px;
					width: 100px;
					height: 100%;
					box-shadow: 0 0 10px ${config.color}, 0 0 5px ${config.color};
					opacity: 1.0;
				
					-webkit-transform: rotate(3deg) translate(0px, -4px);
							-ms-transform: rotate(3deg) translate(0px, -4px);
									transform: rotate(3deg) translate(0px, -4px);
				}
				
				/* Remove these to get rid of the spinner */
				#nprogress .spinner {
					display: block;
					position: fixed;
					z-index: 1031;
					top: 15px;
					right: 15px;
				}
				
				#nprogress .spinner-icon {
					width: 18px;
					height: 18px;
					box-sizing: border-box;
				
					border: solid 2px transparent;
					border-top-color: ${config.color};
					border-left-color: ${config.color};
					border-radius: 50%;
				
					-webkit-animation: nprogress-spinner 400ms linear infinite;
									animation: nprogress-spinner 400ms linear infinite;
				}
				
				.nprogress-custom-parent {
					overflow: hidden;
					position: relative;
				}
				
				.nprogress-custom-parent #nprogress .spinner,
				.nprogress-custom-parent #nprogress .bar {
					position: absolute;
				}
				
				@-webkit-keyframes nprogress-spinner {
					0%   { -webkit-transform: rotate(0deg); }
					100% { -webkit-transform: rotate(360deg); }
				}
				@keyframes nprogress-spinner {
					0%   { transform: rotate(0deg); }
					100% { transform: rotate(360deg); }
				}
			`}
    </style>
  )
  NProgress.configure({ showSpinner: false })
  NProgress.start()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', () => {
        NProgress.done()
      })
    }
  }, [])

  return styles
}
