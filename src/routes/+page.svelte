<script lang="ts">
	import { keyLib } from '$lib/Modules/keylib';

	let keyPress = '';

	let k0 = '';
	let k1 = '';
	let k2 = '';
	let k3 = '';
	let k4 = '';

	function onKeyDown(e: Event) {
		if (keyPress != '') {
      if (keyPress == 'alt (on Windows) / option (on MacOS)') {
        keyPress = 'option'
      } else if (keyPress == 'Windows Key (on Windows) / Command Key on MacOS') {
        keyPress = 'cmd'
      }

			if (k0 != '') {
				if (k1 != '') {
					if (k2 != '') {
						if (k3 != '') {
							  k4 = k3
								k3 = k2;
								k2 = k1;
								k1 = k0;
								k0 = keyPress;
						} else {
							k3 = k2;
							k2 = k1;
							k1 = k0;
							k0 = keyPress;
						}
					} else {
						k2 = k1;
						k1 = k0;
						k0 = keyPress;
					}
				} else {
					k1 = k0;
					k0 = keyPress;
				}
			} else {
				k0 = keyPress;
			}
		}

		keyPress = keyLib(e);
	}
</script>

<svelte:head>
	<title>Home | what did i press?</title>
</svelte:head>

<div class="w-full h-[calc(100vh-8rem)] flex flex-col justify-center items-center">
	<div id="pressed">
		<p class={keyPress != '' ? 'text-4xl my-2' : 'text-3xl my-2'}>
      {keyPress != '' ? keyPress : 'just start typing :)'}
    </p>
	</div>
	<div id="history" class="max-w-[22rem] flex flex-row gap-4 justify-center">
		<div class={`${k0 != '' ? 'bg-[#fe6e6f]' : ''} w-full my-4 p-4 rounded text-center`}>
			{k0}
		</div>
		<div class={`${k1 != '' ? 'bg-[#fe6e6f]' : ''} w-full my-4 p-4 rounded text-center`}>
			{k1}
		</div>
		<div class={`${k2 != '' ? 'bg-[#fe6e6f]' : ''} w-full my-4 p-4 rounded text-center`}>
			{k2}
		</div>
		<div class={`${k3 != '' ? 'bg-[#fe6e6f]' : ''} w-full my-4 p-4 rounded text-center`}>
			{k3}
		</div>
		<div class={`${k4 != '' ? 'bg-[#fe6e6f]' : ''} w-full my-4 p-4 rounded text-center`}>
			{k4}
		</div>
	</div>
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} />
