<template>
    <div class="z-10 fixed top-0 w-full h-full">
        <div class="h-full backdrop-brightness-50">
            <div
                class=" rounded-lg bg-white m-auto fixed top-0 left-0 bottom-0 right-0 w-3/6 h-fit max-w-[377px] min-w-[300px] min-h-[252px] m-auto p-8 center">
                <slot />

            </div>
        </div>
    </div>
</template>