document.addEventListener("DOMContentLoaded", () => {
	const q = document.getElementById("q");
	for (let i = 1; i <= 35; i++) {
		const w = document.createElement("div");
		w.className = "flex items-center justify-between gap-4 flex-wrap";
		const n = document.createElement("div");
		n.className = "w-6 text-sm font-medium text-gray-700 text-right";
		n.textContent = i + ".";
		const o = document.createElement("div");
		o.className = "flex gap-3 flex-wrap";
		const opts = i <= 32 ? ['a', 'b', 'c', 'd'] : ['a', 'b', 'c', 'd', 'e', 'f'];
		opts.forEach(l => {
			const lb = document.createElement("label");
			lb.className = "cursor-pointer";
			const x = document.createElement("input");
			x.type = "radio";
			x.name = "q" + i;
			x.value = l;
			x.required = true;
			x.id = "q" + i + "_" + l;
			x.className = "peer hidden";
			const d = document.createElement("div");
			d.className = "w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-blue-600 hover:bg-gray-100 transition-all text-sm font-medium shadow-sm";
			d.textContent = l.toUpperCase();
			lb.appendChild(x);
			lb.appendChild(d);
			o.appendChild(lb);
		});
		w.appendChild(n);
		w.appendChild(o);
		q.appendChild(w);
	}

	const keyboardLayout = {
		label: 'Math All-In-One',
		rows: [
			['[1]', '[2]', '[3]', '[4]', '[5]', '[6]', '[7]', '[8]', '[9]', '[0]'],
			['\\pi', 'e', 'a', 'b', 'c', 'x', 'y', 'z', '.'],
			['[(]', '[)]', '\\frac{#?}{#?}', '\\sqrt{#?}', '{#?}^{#?}', '{#?}^{2}', '{#?}^{3}', '\\sqrt[3]{#?}', '\\sqrt[n]{#?}'],
			['+', '-', { latex: '\\sin{#?}', width: 1.5 }, { latex: '\\cos{#?}', width: 1.5 }, { latex: '\\tan{#?}', width: 1.5 }, { latex: '\\cot{#?}', width: 1.5 }],
			[{ latex: '\\arcsin{#?}', width: 2 }, { latex: '\\arccos{#?}', width: 2 }, { latex: '\\arctan{#?}', width: 2 }, { latex: '\\arcctg{#?}', width: 2 }],
			[{ latex: '\\ln{#?}', width: 1.5 }, { latex: '\\log{#?}', width: 1.5 }, { latex: '\\log_{#?}{#?}', width: 2 }, { latex: '\\exp{#?}', width: 1.5 }],
			['[left]', '[right]', '[return]', '[backspace]']
		]
	};

	for (let i = 36; i <= 55; i++) {
		const mf = document.getElementById(`q${i}`);
		if (mf) {
			mf.addEventListener('focus', () => {
				mathVirtualKeyboard.layouts = keyboardLayout;
				mathVirtualKeyboard.keyboardLayout = 'custom';
			});
		}
	}
	
	document.getElementById('main').style = '';
});

function s() {
	const result = Array.from({length: 55, fill: null});
	for (let i = 1; i <= 35; i++) {
		const e = document.querySelector(`input[name="q${i}"]:checked`);
		if (e !== null) {
			result[i] = e.value;
		} else {
			alert("Barcha bo'shliqlarni to'ldiring!");
			return;
		}
	}
	for (let i = 36; i <= 55; i++) {
		const mf = document.getElementById("q" + i);
		if (mf !== null && mf.value !== null && mf.value !== "") {
			result[i] = mf.value;
		} else {
			alert("Barcha bo'shliqlarni to'ldiring!");
			return;
		}
	}
	document.getElementById('answers').value = JSON.stringify(result);
	document.getElementById('f').submit();
}