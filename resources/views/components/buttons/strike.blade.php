<button type="button"
    x-on:click="editor().chain().focus().toggleStrike().run()"
    :class="{ 'active': isActive('strike', updatedAt) }"
    x-tooltip="'Strike'">
    <svg xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="w-5 h-5 iconify iconify--ic"
        width="24"
        height="24"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24">
        <path fill="currentColor"
            d="M6.85 7.08C6.85 4.37 9.45 3 12.24 3c1.64 0 3 .49 3.9 1.28c.77.65 1.46 1.73 1.46 3.24h-3.01c0-.31-.05-.59-.15-.85c-.29-.86-1.2-1.28-2.25-1.28c-1.86 0-2.34 1.02-2.34 1.7c0 .48.25.88.74 1.21c.38.25.77.48 1.41.7H7.39c-.21-.34-.54-.89-.54-1.92zM21 12v-2H3v2h9.62c1.15.45 1.96.75 1.96 1.97c0 1-.81 1.67-2.28 1.67c-1.54 0-2.93-.54-2.93-2.51H6.4c0 .55.08 1.13.24 1.58c.81 2.29 3.29 3.3 5.67 3.3c2.27 0 5.3-.89 5.3-4.05c0-.3-.01-1.16-.48-1.94H21V12z">
        </path>
    </svg>
    <span class="sr-only">Strike</span>
</button>
