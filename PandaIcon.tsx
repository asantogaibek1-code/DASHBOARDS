/**
 * Маскот-панда для логотипа и фоновые силуэты
 * Все панды — inline SVG (работают без внешних зависимостей)
 */

/**
 * Главная панда-маскот для логотипа (милая, с деталями)
 */
export function PandaMascot({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      aria-hidden
    >
      {/* Уши */}
      <circle cx="16" cy="16" r="9" fill="#1a1a1a" />
      <circle cx="48" cy="16" r="9" fill="#1a1a1a" />
      <circle cx="16" cy="16" r="5" fill="#333" />
      <circle cx="48" cy="16" r="5" fill="#333" />
      {/* Голова */}
      <ellipse cx="32" cy="36" rx="22" ry="20" fill="#f5f5f5" />
      {/* Глаза */}
      <ellipse cx="23" cy="33" rx="7" ry="8" fill="#1a1a1a" />
      <ellipse cx="41" cy="33" rx="7" ry="8" fill="#1a1a1a" />
      {/* Блики */}
      <circle cx="24" cy="32" r="3" fill="#fff" />
      <circle cx="42" cy="32" r="3" fill="#fff" />
      <circle cx="25" cy="31" r="1.2" fill="#1a1a1a" />
      <circle cx="43" cy="31" r="1.2" fill="#1a1a1a" />
      {/* Нос */}
      <ellipse cx="32" cy="42" rx="3.5" ry="2.8" fill="#1a1a1a" />
      <ellipse cx="31" cy="41" rx="1.2" ry="0.8" fill="#333" />
      {/* Рот */}
      <path d="M32 44.5Q27 49 24 47" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M32 44.5Q37 49 40 47" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" />
      {/* Румянец */}
      <circle cx="18" cy="40" r="3" fill="#ffcccc" opacity="0.3" />
      <circle cx="46" cy="40" r="3" fill="#ffcccc" opacity="0.3" />
    </svg>
  );
}

/**
 * Силуэт панды, сидящей с бамбуком
 */
export function PandaSilhouetteBamboo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="150"
      height="150"
      viewBox="0 0 120 120"
      className={className}
      aria-hidden
    >
      {/* Уши */}
      <circle cx="42" cy="28" r="12" fill="currentColor" />
      <circle cx="72" cy="28" r="12" fill="currentColor" />
      {/* Голова */}
      <circle cx="57" cy="45" r="22" fill="currentColor" />
      {/* Тело */}
      <ellipse cx="57" cy="85" rx="28" ry="25" fill="currentColor" />
      {/* Лапы */}
      <ellipse cx="38" cy="100" rx="9" ry="7" fill="currentColor" />
      <ellipse cx="76" cy="100" rx="9" ry="7" fill="currentColor" />
      {/* Бамбук */}
      <rect x="88" y="30" width="4" height="60" rx="2" fill="currentColor" opacity="0.7" />
      <rect x="88" y="50" width="4" height="2" fill="currentColor" opacity="0.5" />
      <rect x="88" y="70" width="4" height="2" fill="currentColor" opacity="0.5" />
      {/* Листья бамбука */}
      <ellipse cx="95" cy="35" rx="8" ry="3" fill="currentColor" opacity="0.6" transform="rotate(-30 95 35)" />
      <ellipse cx="95" cy="55" rx="8" ry="3" fill="currentColor" opacity="0.6" transform="rotate(-30 95 55)" />
    </svg>
  );
}

/**
 * Силуэт панды, машущей рукой
 */
export function PandaSilhouetteWaving({ className = "" }: { className?: string }) {
  return (
    <svg
      width="150"
      height="150"
      viewBox="0 0 120 130"
      className={className}
      aria-hidden
    >
      {/* Уши */}
      <circle cx="38" cy="25" r="11" fill="currentColor" />
      <circle cx="68" cy="25" r="11" fill="currentColor" />
      {/* Голова */}
      <circle cx="53" cy="40" r="20" fill="currentColor" />
      {/* Тело */}
      <ellipse cx="53" cy="80" rx="26" ry="30" fill="currentColor" />
      {/* Правая рука машет */}
      <ellipse cx="82" cy="55" rx="7" ry="18" fill="currentColor" transform="rotate(45 82 55)" />
      {/* Левая рука */}
      <ellipse cx="30" cy="75" rx="7" ry="16" fill="currentColor" transform="rotate(-15 30 75)" />
      {/* Ноги */}
      <ellipse cx="42" cy="110" rx="9" ry="12" fill="currentColor" />
      <ellipse cx="64" cy="110" rx="9" ry="12" fill="currentColor" />
    </svg>
  );
}

/**
 * Силуэт спящей панды
 */
export function PandaSilhouetteSleeping({ className = "" }: { className?: string }) {
  return (
    <svg
      width="150"
      height="150"
      viewBox="0 0 140 100"
      className={className}
      aria-hidden
    >
      {/* Уши */}
      <circle cx="35" cy="30" r="10" fill="currentColor" />
      <circle cx="65" cy="30" r="10" fill="currentColor" />
      {/* Голова (наклонена) */}
      <ellipse cx="50" cy="45" rx="20" ry="18" fill="currentColor" transform="rotate(-10 50 45)" />
      {/* Тело (свёрнутое) */}
      <ellipse cx="85" cy="60" rx="35" ry="25" fill="currentColor" />
      {/* Лапы */}
      <ellipse cx="55" cy="75" rx="8" ry="6" fill="currentColor" />
      <ellipse cx="100" cy="75" rx="8" ry="6" fill="currentColor" />
      {/* Хвост */}
      <circle cx="115" cy="50" r="6" fill="currentColor" />
      {/* Zzz — сон */}
      <text x="80" y="25" fontSize="12" fill="currentColor" opacity="0.4" fontFamily="sans-serif" fontWeight="bold">z</text>
      <text x="92" y="18" fontSize="10" fill="currentColor" opacity="0.3" fontFamily="sans-serif" fontWeight="bold">z</text>
      <text x="102" y="12" fontSize="8" fill="currentColor" opacity="0.2" fontFamily="sans-serif" fontWeight="bold">z</text>
    </svg>
  );
}

/**
 * Мини-панда для footer и тостов
 */
export function PandaMini({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 64 64"
      className={className}
      aria-hidden
    >
      <circle cx="18" cy="18" r="8" fill="currentColor" opacity="0.6" />
      <circle cx="46" cy="18" r="8" fill="currentColor" opacity="0.6" />
      <circle cx="32" cy="34" r="20" fill="currentColor" />
      <ellipse cx="24" cy="32" rx="6" ry="7" fill="#0a0f1a" />
      <ellipse cx="40" cy="32" rx="6" ry="7" fill="#0a0f1a" />
      <ellipse cx="32" cy="40" rx="3" ry="2.5" fill="#0a0f1a" />
    </svg>
  );
}
