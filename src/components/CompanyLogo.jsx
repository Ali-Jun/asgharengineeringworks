import { assetPath } from '../utils/assetPath.js';

export default function CompanyLogo({ className = '', imageClassName = '' }) {
  return (
    <span className={`logo-surface inline-flex shrink-0 items-center justify-center overflow-hidden rounded-md ${className}`}>
      <img
        className={`h-full w-full object-contain ${imageClassName}`}
        src={assetPath('/images/company-logo.svg')}
        alt="Asghar Engineering Works logo"
        decoding="async"
      />
    </span>
  );
}
