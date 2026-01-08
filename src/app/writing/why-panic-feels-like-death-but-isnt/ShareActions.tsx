'use client';

export default function ShareActions() {
  return (
    <div className="flex gap-4 text-sm">
      <a
        href="https://twitter.com/intent/tweet?text=Why%20Panic%20Feels%20Like%20Death%20(But%20Isn’t)&url=https://briannjata.org/writing/why-panic-feels-like-death"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white"
      >
        Share on X
      </a>

      <button
        onClick={() =>
          navigator.clipboard.writeText(window.location.href)
        }
        className="hover:text-white"
      >
        Copy link
      </button>
    </div>
  );
}
