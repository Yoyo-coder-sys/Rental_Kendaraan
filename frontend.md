<!-- Vehicle Detail (No Login) -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Kinetic Gallery | Vehicle Detail</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-background": "#021d33",
                    "secondary": "#545e76",
                    "tertiary": "#250900",
                    "on-tertiary-fixed-variant": "#7a3000",
                    "primary-fixed-dim": "#b4c5ff",
                    "inverse-surface": "#1a324a",
                    "surface-container-lowest": "#ffffff",
                    "error": "#ba1a1a",
                    "on-surface-variant": "#45474d",
                    "primary": "#000e35",
                    "on-error": "#ffffff",
                    "tertiary-fixed-dim": "#ffb693",
                    "on-secondary-fixed": "#101b30",
                    "on-primary": "#ffffff",
                    "surface-tint": "#0052dc",
                    "background": "#f8f9ff",
                    "tertiary-container": "#461800",
                    "secondary-container": "#d7e2ff",
                    "primary-fixed": "#dbe1ff",
                    "on-secondary-container": "#5a647c",
                    "outline-variant": "#c5c6cd",
                    "surface-variant": "#d0e4ff",
                    "secondary-fixed": "#d7e2ff",
                    "inverse-on-surface": "#e9f1ff",
                    "outline": "#75777d",
                    "on-surface": "#021d33",
                    "on-tertiary": "#ffffff",
                    "on-primary-container": "#5b86ff",
                    "surface-container": "#e4efff",
                    "on-error-container": "#93000a",
                    "surface-dim": "#c5dcfb",
                    "surface-bright": "#f8f9ff",
                    "on-tertiary-container": "#ec6300",
                    "on-primary-fixed-variant": "#003ea8",
                    "secondary-fixed-dim": "#bbc6e2",
                    "on-secondary-fixed-variant": "#3c475d",
                    "inverse-primary": "#b4c5ff",
                    "surface-container-highest": "#d0e4ff",
                    "surface-container-low": "#eef4ff",
                    "on-primary-fixed": "#00174b",
                    "surface": "#f8f9ff",
                    "on-secondary": "#ffffff",
                    "primary-container": "#002062",
                    "on-tertiary-fixed": "#351000",
                    "surface-container-high": "#dae9ff",
                    "error-container": "#ffdad6",
                    "tertiary-fixed": "#ffdbcc"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "fontFamily": {
                    "headline": ["Manrope"],
                    "body": ["Inter"],
                    "label": ["Inter"]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3 { font-family: 'Manrope', sans-serif; }
    </style>
</head>
<body class="bg-background text-on-background min-h-screen flex flex-col">
<!-- TopNavBar -->
<header class="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm">
<div class="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
<div class="text-2xl font-black text-[#1B263B] dark:text-white uppercase tracking-tighter">Kinetic Gallery</div>
<nav class="hidden md:flex items-center space-x-8 font-['Manrope'] font-bold tracking-tight">
<a class="text-slate-500 dark:text-slate-400 hover:text-[#1B263B] dark:hover:text-white pb-1 transition-colors duration-300" href="#">Home</a>
<a class="text-[#1B263B] dark:text-white border-b-2 border-[#1B263B] dark:border-white pb-1" href="#">Vehicles</a>
<a class="text-slate-500 dark:text-slate-400 hover:text-[#1B263B] dark:hover:text-white pb-1 transition-colors duration-300" href="#">Admin</a>
</nav>
</div>
</header>
<main class="pt-24 pb-20 max-w-7xl mx-auto px-8 w-full flex-grow">
<!-- Breadcrumb / Back Navigation -->
<div class="mb-8">
<button class="flex items-center text-secondary hover:text-primary transition-colors group">
<span class="material-symbols-outlined mr-2 transition-transform group-hover:-translate-x-1">arrow_back</span>
<span class="font-medium">Back to Fleet</span>
</button>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
<!-- Gallery & Info Column -->
<div class="lg:col-span-8 space-y-12">
<!-- Hero Gallery Asymmetric Layout -->
<div class="grid grid-cols-4 grid-rows-2 gap-4 h-[500px]">
<div class="col-span-3 row-span-2 overflow-hidden rounded-full">
<img class="w-full h-full object-cover" data-alt="sleek modern charcoal grey sports sedan parked on a clean concrete surface in a minimalist architectural studio with soft daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwgwnoulvTdkpQLVFqckAB0NuTcC3hWqMKwZoiq1As2YAw2XymxIfNESuYNMYnC7Kuk_erdS3QdjpcL0xTmVXSiVy6kujdF-8aN1rnxLNskXkcC17m_dVG4Z7a-SRGo2_G2iA8kpvZGfBMFw5bhjzeK_zAM4FRic3mnIlg21h_hd-pqiP8J_sTYoOazx5aW5sqPRmFPedQRzDD1h5rxH5J7NNsxjQy3-I2_4BLeCjQHUI8tNBMAq2RLK2wnEKRtXyVQ2bVRSabvgg"/>
</div>
<div class="col-span-1 row-span-1 overflow-hidden rounded-full">
<img class="w-full h-full object-cover" data-alt="close up profile of a premium vehicle's alloy wheel and sleek body lines in high end cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSlLIY0ZJ90iNOgA_gwxYAIpiZfYxlX8AcizdRZmvkP-Hk32he1EL7EqhUQ8TXd0dArIKNiXCZiwNZrYPFCbcRlm_C74K03Wqo_6M3iPul-elKsxk1uybZQAQyFaHXHJ4BzemKBV1-WUdRTnFRySNjw3_x_026ui8aG858pkL5gz9vF1xNy-DjuYb4_rVGjBSLisgajKHQB_46XAKLAv5Y5qX1I93LvCSaxJjhatqAavpDD0lz3m_MD422nEE7XR7am3Ls3hNvII0"/>
</div>
<div class="col-span-1 row-span-1 overflow-hidden rounded-full relative group">
<img class="w-full h-full object-cover" data-alt="luxurious car interior with premium leather seats and high tech dashboard illuminated by soft ambient blue light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7sROxbZ70OHWRIk5Iwm04R5Sc1tsjmVa2oA3VCb6yUltUsUc3ZizojtYGe80ZHYGWxyY_6r9RQ7FG8J6IAXPg-7lCNGGVjfj9v9XfQ8JlRijYaRvqHqeP0egYkbblIdOulBd1hoQ-cKfFJiMNMzcAN0x1wM03Yp5a0yeAw-IVEWx93OD9vgBCwK2LkmhrhT_KFoK4lioLbWl6F_lyClcELEPXB5P0SsUouxlxMW2qqYeApS5LC78DE6EH7xKmwrImtNayljeo1i0"/>
<div class="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
<span class="text-white font-bold">+12 Photos</span>
</div>
</div>
</div>
<!-- Headline Section -->
<div class="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
<div>
<span class="text-on-primary-container font-semibold tracking-widest uppercase text-xs mb-2 block">Premium Performance</span>
<h1 class="text-5xl font-extrabold tracking-tight text-primary">Vanguard Drive XE</h1>
<p class="text-secondary mt-2 flex items-center">
<span class="material-symbols-outlined text-sm mr-1">location_on</span>
                            Available at Vanguard Drive Main Hub
                        </p>
</div>
<div class="text-right">
<span class="block text-secondary text-sm font-medium">Starting from</span>
<div class="flex items-baseline justify-end gap-1">
<span class="text-4xl font-black text-primary">$189</span>
<span class="text-secondary font-label">/ day</span>
</div>
</div>
</div>
<!-- Specs Bento Grid -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
<div class="bg-surface-container-low p-6 rounded-full flex flex-col items-center justify-center text-center">
<span class="material-symbols-outlined text-on-primary-container mb-2">local_gas_station</span>
<span class="text-xs text-secondary font-medium uppercase tracking-wider">Fuel</span>
<span class="text-primary font-bold">Hybrid / 5.2L</span>
</div>
<div class="bg-surface-container-low p-6 rounded-full flex flex-col items-center justify-center text-center">
<span class="material-symbols-outlined text-on-primary-container mb-2">airline_seat_recline_extra</span>
<span class="text-xs text-secondary font-medium uppercase tracking-wider">Seats</span>
<span class="text-primary font-bold">5 Adults</span>
</div>
<div class="bg-surface-container-low p-6 rounded-full flex flex-col items-center justify-center text-center">
<span class="material-symbols-outlined text-on-primary-container mb-2">settings_input_component</span>
<span class="text-xs text-secondary font-medium uppercase tracking-wider">Transmission</span>
<span class="text-primary font-bold">Automatic</span>
</div>
<div class="bg-surface-container-low p-6 rounded-full flex flex-col items-center justify-center text-center">
<span class="material-symbols-outlined text-on-primary-container mb-2">speed</span>
<span class="text-xs text-secondary font-medium uppercase tracking-wider">Top Speed</span>
<span class="text-primary font-bold">240 km/h</span>
</div>
</div>
<!-- Description -->
<div class="space-y-4">
<h2 class="text-2xl font-bold text-primary">Vehicle Overview</h2>
<p class="text-on-surface-variant leading-relaxed max-w-2xl">
                        The Vanguard Drive XE represents the pinnacle of modern fleet excellence. Designed for those who demand performance without compromising on comfort, this hybrid masterpiece features adaptive cruise control, a panoramic sunroof, and a premium surround sound system. Whether it's a corporate commute or a weekend getaway, the XE delivers authoritative fluidity on every road.
                    </p>
</div>
</div>
<!-- Booking Form Column -->
<div class="lg:col-span-4">
<div class="sticky top-28 bg-surface-container-lowest rounded-full p-8 shadow-sm border-0">
<h3 class="text-xl font-bold text-primary mb-6">Reserve This Vehicle</h3>
<form class="space-y-6">
<!-- Name Input -->
<div class="space-y-1">
<label class="text-xs font-bold text-secondary uppercase tracking-tighter px-1">Full Name</label>
<input class="w-full bg-surface-container-high border-none rounded-xl p-4 focus:ring-2 focus:ring-on-primary-container transition-all placeholder:text-outline" placeholder="John Doe" type="text"/>
</div>
<!-- WhatsApp Input -->
<div class="space-y-1">
<label class="text-xs font-bold text-secondary uppercase tracking-tighter px-1">WhatsApp Number</label>
<div class="relative">
<input class="w-full bg-surface-container-high border-none rounded-xl p-4 focus:ring-2 focus:ring-on-primary-container transition-all placeholder:text-outline" placeholder="+1 234 567 890" type="tel"/>
<span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#25D366]">chat</span>
</div>
</div>
<!-- Date Inputs -->
<div class="grid grid-cols-2 gap-4">
<div class="space-y-1">
<label class="text-xs font-bold text-secondary uppercase tracking-tighter px-1">Pick Up</label>
<input class="w-full bg-surface-container-high border-none rounded-xl p-4 focus:ring-2 focus:ring-on-primary-container transition-all text-sm" type="date"/>
</div>
<div class="space-y-1">
<label class="text-xs font-bold text-secondary uppercase tracking-tighter px-1">Return</label>
<input class="w-full bg-surface-container-high border-none rounded-xl p-4 focus:ring-2 focus:ring-on-primary-container transition-all text-sm" type="date"/>
</div>
</div>
<!-- Pricing Summary -->
<div class="bg-surface-container p-4 rounded-xl space-y-2">
<div class="flex justify-between text-sm">
<span class="text-secondary">Rental (3 days)</span>
<span class="text-primary font-bold">$567.00</span>
</div>
<div class="flex justify-between text-sm">
<span class="text-secondary">Insurance</span>
<span class="text-primary font-bold">$45.00</span>
</div>
<div class="pt-2 border-t border-outline-variant/30 flex justify-between items-center">
<span class="font-bold text-primary">Total Est.</span>
<span class="text-xl font-black text-primary">$612.00</span>
</div>
</div>
<!-- Booking Buttons -->
<div class="space-y-3">
<button class="w-full bg-gradient-to-r from-primary to-on-primary-container text-white font-bold py-4 rounded-xl active:scale-95 transition-all shadow-md" type="submit">
                                Confirm Reservation
                            </button>
<button class="w-full bg-on-tertiary-container text-white font-bold py-4 rounded-xl active:scale-95 transition-all flex items-center justify-center gap-2" type="button">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">chat</span>
                                Booking via WhatsApp
                            </button>
</div>
<p class="text-[10px] text-center text-secondary uppercase tracking-widest">
                            No immediate payment required
                        </p>
</form>
</div>
</div>
</div>
<!-- Related Fleet (Simple Section) -->
<section class="mt-24 space-y-8">
<div class="flex justify-between items-end">
<h2 class="text-3xl font-black text-primary">Similar Performance</h2>
<a class="text-on-primary-container font-bold border-b-2 border-on-primary-container pb-1" href="#">View Full Fleet</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Mini Card 1 -->
<div class="group cursor-pointer">
<div class="aspect-video rounded-full overflow-hidden mb-4 bg-surface-dim">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="side view of a white electric luxury suv driving on a winding coastal road at sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyEr_nEbGvSM1YBbhhps9PTHq46Jz0xS-vkmCzMaP1pe8OZr9yTsAYlWKDS5wZSE-HPsWeqVt3_jVOOLQPMHi72s06StccL0g7HXUNOJjiCFZr2I6rgS8IaWDpEsnqjeETBs6TDh2WxzEs6bGtDtYi4m-8vE2MjFOGqQGZTs-CzWzQVtybyAZK2MtoniwfulWIX7ZURBwMBi-Hu31iSwMXzRDN2LcUEc7dkP-nTNm7X9YwO9IIWi4IRa_4zZNhd7iSl1iBAJTYmAY"/>
</div>
<div class="flex justify-between items-start">
<div>
<h4 class="font-bold text-primary text-lg">Luminary GT</h4>
<p class="text-secondary text-sm">Electric • 5 Seats</p>
</div>
<span class="font-black text-primary">$210/d</span>
</div>
</div>
<!-- Mini Card 2 -->
<div class="group cursor-pointer">
<div class="aspect-video rounded-full overflow-hidden mb-4 bg-surface-dim">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="front view of a black executive sedan in a heavy rain with bright headlights on" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHPxGd_IpKweg9m5azXbQ5I0dO5vA0kQsc5ayRX1UE7X5Hy1VdeVEhNY2_26psIrYEkXug3hlTdU9xj8igL-oFCNB4STceM6w6fTnMJjtbIgKyyY3VdqlW34MeOnDxmoUbRyoS_ML6hCKTrvWTflAaB65JK-TWl74PpuDcE86EYhJiA8UNCb97wJPTizbdBbKPMO7QFM4yLNLw3lqWvvtc4CYw9u97cZQkSzanTjs42dmiBodDed_qJa4c2oTX6tiGFMwR8eGF-Ns"/>
</div>
<div class="flex justify-between items-start">
<div>
<h4 class="font-bold text-primary text-lg">Apex Executive</h4>
<p class="text-secondary text-sm">Diesel • 5 Seats</p>
</div>
<span class="font-black text-primary">$175/d</span>
</div>
</div>
<!-- Mini Card 3 -->
<div class="group cursor-pointer">
<div class="aspect-video rounded-full overflow-hidden mb-4 bg-surface-dim">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="luxury blue convertible sports car on a modern bridge during the blue hour with city lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkylZCN5R3h1Rgb4QnAcsJO7RwkX8ca3htp3NYOHTn_VrKHfzx7AqltIWsK2LfwJa0gQNC734ysb0sevJub2e72Y2IbjAOosKruQSNir1xSU6ojgpvM1NxU4OV5nzo8DkzGhr0VbKwhfTMoJRuo5_dDa-08qv9bn2L0-_8_agmeXaonu1eRfxhD4PG2y4In_JIu7LaCwOhYFnsOeZRPPLvscBIIB4agHXslVHVfdgC2LiPeRzHSf73d5HYjkoWI_RuAr9mk4YR63c"/>
</div>
<div class="flex justify-between items-start">
<div>
<h4 class="font-bold text-primary text-lg">Zenith Roadster</h4>
<p class="text-secondary text-sm">Petrol • 2 Seats</p>
</div>
<span class="font-black text-primary">$290/d</span>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-slate-50 dark:bg-slate-950 w-full py-12 mt-auto">
<div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-8">
<div class="col-span-1 md:col-span-1">
<div class="font-['Manrope'] font-black text-lg text-[#1B263B] dark:text-white mb-4">Kinetic Gallery</div>
<p class="text-slate-500 dark:text-slate-400 text-sm font-['Inter'] leading-relaxed">
                    © 2024 Kinetic Gallery. Editorial Fleet Excellence. Redefining the vehicle rental experience through curated aesthetics.
                </p>
</div>
<div class="flex flex-col space-y-3 font-['Inter'] text-sm">
<h4 class="text-[#1B263B] dark:text-white font-semibold">Fleet</h4>
<a class="text-slate-500 dark:text-slate-400 hover:text-[#5b86ff] transition-colors" href="#">Luxury Sedans</a>
<a class="text-slate-500 dark:text-slate-400 hover:text-[#5b86ff] transition-colors" href="#">Performance SUVs</a>
<a class="text-slate-500 dark:text-slate-400 hover:text-[#5b86ff] transition-colors" href="#">Electric Selection</a>
</div>
<div class="flex flex-col space-y-3 font-['Inter'] text-sm">
<h4 class="text-[#1B263B] dark:text-white font-semibold">Support</h4>
<a class="text-slate-500 dark:text-slate-400 hover:text-[#5b86ff] transition-colors" href="#">Contact</a>
<a class="text-slate-500 dark:text-slate-400 hover:text-[#5b86ff] transition-colors" href="#">Fleet Support</a>
<a class="text-slate-500 dark:text-slate-400 hover:text-[#5b86ff] transition-colors" href="#">WhatsApp Help</a>
</div>
<div class="flex flex-col space-y-3 font-['Inter'] text-sm">
<h4 class="text-[#1B263B] dark:text-white font-semibold">Legal</h4>
<a class="text-slate-500 dark:text-slate-400 hover:text-[#5b86ff] transition-colors" href="#">Terms of Service</a>
<a class="text-slate-500 dark:text-slate-400 hover:text-[#5b86ff] transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</footer>
</body></html>

<!-- Admin Dashboard (No Login) -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Kinetic Gallery Admin - Vanguard Drive</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-background": "#021d33",
                    "secondary": "#545e76",
                    "tertiary": "#250900",
                    "on-tertiary-fixed-variant": "#7a3000",
                    "primary-fixed-dim": "#b4c5ff",
                    "inverse-surface": "#1a324a",
                    "surface-container-lowest": "#ffffff",
                    "error": "#ba1a1a",
                    "on-surface-variant": "#45474d",
                    "primary": "#000e35",
                    "on-error": "#ffffff",
                    "tertiary-fixed-dim": "#ffb693",
                    "on-secondary-fixed": "#101b30",
                    "on-primary": "#ffffff",
                    "surface-tint": "#0052dc",
                    "background": "#f8f9ff",
                    "tertiary-container": "#461800",
                    "secondary-container": "#d7e2ff",
                    "primary-fixed": "#dbe1ff",
                    "on-secondary-container": "#5a647c",
                    "outline-variant": "#c5c6cd",
                    "surface-variant": "#d0e4ff",
                    "secondary-fixed": "#d7e2ff",
                    "inverse-on-surface": "#e9f1ff",
                    "outline": "#75777d",
                    "on-surface": "#021d33",
                    "on-tertiary": "#ffffff",
                    "on-primary-container": "#5b86ff",
                    "surface-container": "#e4efff",
                    "on-error-container": "#93000a",
                    "surface-dim": "#c5dcfb",
                    "surface-bright": "#f8f9ff",
                    "on-tertiary-container": "#ec6300",
                    "on-primary-fixed-variant": "#003ea8",
                    "secondary-fixed-dim": "#bbc6e2",
                    "on-secondary-fixed-variant": "#3c475d",
                    "inverse-primary": "#b4c5ff",
                    "surface-container-highest": "#d0e4ff",
                    "surface-container-low": "#eef4ff",
                    "on-primary-fixed": "#00174b",
                    "surface": "#f8f9ff",
                    "on-secondary": "#ffffff",
                    "primary-container": "#002062",
                    "on-tertiary-fixed": "#351000",
                    "surface-container-high": "#dae9ff",
                    "error-container": "#ffdad6",
                    "tertiary-fixed": "#ffdbcc"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "fontFamily": {
                    "headline": ["Manrope"],
                    "body": ["Inter"],
                    "label": ["Inter"]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3, .font-headline { font-family: 'Manrope', sans-serif; }
    </style>
</head>
<body class="bg-background text-on-background min-h-screen flex flex-col">
<!-- Top Navigation Bar (Shared Component Strategy) -->
<header class="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-md shadow-sm">
<div class="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
<div class="text-2xl font-black text-[#1B263B] uppercase tracking-tighter">Kinetic Gallery</div>
<nav class="hidden md:flex items-center gap-8 font-['Manrope'] font-bold tracking-tight">
<a class="text-slate-500 hover:text-[#1B263B] pb-1 transition-colors duration-300" href="#">Home</a>
<a class="text-slate-500 hover:text-[#1B263B] pb-1 transition-colors duration-300" href="#">Vehicles</a>
<a class="text-[#1B263B] border-b-2 border-[#1B263B] pb-1" href="#">Admin</a>
</nav>
</div>
</header>
<div class="flex pt-20 min-h-screen">
<!-- Sidebar Navigation -->
<aside class="w-64 bg-surface-container-low hidden md:flex flex-col p-6 fixed h-[calc(100vh-5rem)]">
<div class="mb-10">
<p class="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-4">Management</p>
<nav class="space-y-2">
<a class="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container rounded-full font-semibold transition-all" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">directions_car</span>
<span>Fleet</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-surface-container rounded-full transition-all" href="#">
<span class="material-symbols-outlined">event_available</span>
<span>Bookings</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-secondary hover:bg-surface-container rounded-full transition-all" href="#">
<span class="material-symbols-outlined">analytics</span>
<span>Insights</span>
</a>
</nav>
</div>
</aside>
<!-- Main Content Area -->
<main class="flex-1 md:ml-64 p-8">
<div class="max-w-6xl mx-auto">
<!-- Page Header -->
<div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h1 class="text-4xl font-extrabold tracking-tight text-primary mb-2">Fleet Inventory</h1>
<p class="text-on-surface-variant font-medium">Curating 24 high-performance machines for excellence.</p>
</div>
<button class="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-on-primary-container text-on-primary rounded-full font-bold shadow-lg active:scale-95 transition-transform">
<span class="material-symbols-outlined">add</span>
                        Add New Vehicle
                    </button>
</div>
<!-- Dashboard Bento Grid -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
<!-- Fleet Grid Area -->
<div class="lg:col-span-2 space-y-6">
<!-- Vehicle Item 1 -->
<div class="group relative bg-surface-container-lowest rounded-full p-2 flex items-center gap-6 hover:bg-surface-container-high transition-all duration-300">
<div class="w-32 h-20 rounded-full overflow-hidden bg-surface-dim shrink-0">
<img class="w-full h-full object-cover" data-alt="Side profile of a sleek charcoal grey electric sports sedan parked against a minimalist concrete wall with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEYgH4dW6gB2gLzFQV4kr-ULGOjyE8nR_KRiNMUaTnF_0XjaOaIxJeMbvyperBVk7AnxLHEI7L-wgyKpdSleQsomlV91gPa59TDqE6NyJlYB_QHWbJSM21RzAVAc65izbC5y8rVEsxmX2Irivbk2rsgZZbLYmcrJPWoP-fIqXy8ZYtw2igq6gJp4RSH20SkQzbG8-FMp3IpvwMBMyrIa1WQSY9Ce1PJwsMQlgnlwOyHcDoLN8w3GI1MNzZyZwz1YgDVIpuzwexybE"/>
</div>
<div class="flex-1">
<h3 class="text-lg font-bold text-primary">Zephyr S-Class</h3>
<div class="flex gap-4 text-xs text-on-surface-variant font-semibold">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">settings</span> Automatic</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">local_gas_station</span> Electric</span>
</div>
</div>
<div class="text-right px-4">
<p class="text-sm font-black text-on-tertiary-container">$240/day</p>
<div class="flex gap-2 mt-1">
<button class="p-2 hover:bg-primary-fixed rounded-full text-primary transition-colors material-symbols-outlined text-sm">edit</button>
<button class="p-2 hover:bg-error-container rounded-full text-error transition-colors material-symbols-outlined text-sm">delete</button>
</div>
</div>
</div>
<!-- Vehicle Item 2 -->
<div class="group relative bg-surface-container-lowest rounded-full p-2 flex items-center gap-6 hover:bg-surface-container-high transition-all duration-300">
<div class="w-32 h-20 rounded-full overflow-hidden bg-surface-dim shrink-0">
<img class="w-full h-full object-cover" data-alt="Front three-quarter view of a luxury SUV in pearl white finish in a brightly lit studio setting with deep shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm1Fz6zJFCD9QdQmFOUrX6TFpjbbS1BPVSLPVRSYdaHLuhikYa7MuMpJrEkUmqNLw9lbXuI2wt2E07BcscK1IRM7g5gr-oBnYfUSuMTPIquJsWMFMy74p2K5AdgdvU9nRHCFMOAcYZSH5r7KIhpPeEdrINM-Fa2BesptiqLuVxSvli1HbCq3xmGL4JTDH-A_W8Jw1ObUuQO570Ylj1nhlRaJXkgPKAofOzmhgJ_r0Ijd6KbYJxujlRoWQZWRHrp_C0Up-QgGQgxGg"/>
</div>
<div class="flex-1">
<h3 class="text-lg font-bold text-primary">Titan GT Explorer</h3>
<div class="flex gap-4 text-xs text-on-surface-variant font-semibold">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">person</span> 7 Seats</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">ac_unit</span> Climate Control</span>
</div>
</div>
<div class="text-right px-4">
<p class="text-sm font-black text-on-tertiary-container">$185/day</p>
<div class="flex gap-2 mt-1">
<button class="p-2 hover:bg-primary-fixed rounded-full text-primary transition-colors material-symbols-outlined text-sm">edit</button>
<button class="p-2 hover:bg-error-container rounded-full text-error transition-colors material-symbols-outlined text-sm">delete</button>
</div>
</div>
</div>
<!-- Vehicle Item 3 -->
<div class="group relative bg-surface-container-lowest rounded-full p-2 flex items-center gap-6 hover:bg-surface-container-high transition-all duration-300">
<div class="w-32 h-20 rounded-full overflow-hidden bg-surface-dim shrink-0">
<img class="w-full h-full object-cover" data-alt="Detail shot of the rear wheel and tail light of a high-end black sports car under dramatic street lamps at night" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKqpN5PR5Erzye0RgCjaKG8fnwbg_5rstHmd_ZAgbAHGxXxrX5XqoWOkSqc2Wu9SzhuAfD9N4TJAlswSKri8eC68ytWtak4JB3uEksT8NIlsLfJbFB_k1qc15f1-HTTP1S8Pd48m0DbkL2yUICFZJ7N7AIDhw1tXWK0T-25iDtyYEJXEHTB2eyVitOcqKu46EES9DCFf5G5rgC5gaAaGXSwUD1gVUq30O28Coj4crGFZqwKayIsIN7xLAxF_NnQKzjcJ1fJ1J4l7M"/>
</div>
<div class="flex-1">
<h3 class="text-lg font-bold text-primary">Apex V8 Noir</h3>
<div class="flex gap-4 text-xs text-on-surface-variant font-semibold">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">speed</span> 0-60 in 3.2s</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">stars</span> Premium</span>
</div>
</div>
<div class="text-right px-4">
<p class="text-sm font-black text-on-tertiary-container">$410/day</p>
<div class="flex gap-2 mt-1">
<button class="p-2 hover:bg-primary-fixed rounded-full text-primary transition-colors material-symbols-outlined text-sm">edit</button>
<button class="p-2 hover:bg-error-container rounded-full text-error transition-colors material-symbols-outlined text-sm">delete</button>
</div>
</div>
</div>
<!-- Vehicle Item 4 -->
<div class="group relative bg-surface-container-lowest rounded-full p-2 flex items-center gap-6 hover:bg-surface-container-high transition-all duration-300">
<div class="w-32 h-20 rounded-full overflow-hidden bg-surface-dim shrink-0">
<img class="w-full h-full object-cover" data-alt="High-angle view of a modern compact electric vehicle in a vibrant blue parked in an architectural urban setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_yQDeSATchYSFoGlnYqMmf3mOMhANC-yHjNK_nExkAv_E5uZmnKRrpPaiSwF9oyKHb7kkniSTe9-e57dMCAygk2hXs29yLgjbGRBzaWt3FY9cWRO1GAlKP9FI-F06PqjiJns6SStKrRdGbtNF8QXXDw8fndfvgRuUXFmdBgEiQz6MJzeqoEThLNCkiwt5fp34QQxZbgpqzakf_QvS81g7as3HQKG5FCtm2k5dykMGN4i1_JboCbmAFFdJuB0HvHztIWLCgKwDXdI"/>
</div>
<div class="flex-1">
<h3 class="text-lg font-bold text-primary">Nova City E-Drive</h3>
<div class="flex gap-4 text-xs text-on-surface-variant font-semibold">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">battery_charging_full</span> 450mi Range</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">park</span> Eco-Friendly</span>
</div>
</div>
<div class="text-right px-4">
<p class="text-sm font-black text-on-tertiary-container">$120/day</p>
<div class="flex gap-2 mt-1">
<button class="p-2 hover:bg-primary-fixed rounded-full text-primary transition-colors material-symbols-outlined text-sm">edit</button>
<button class="p-2 hover:bg-error-container rounded-full text-error transition-colors material-symbols-outlined text-sm">delete</button>
</div>
</div>
</div>
</div>
<!-- WhatsApp Inquiries Sidebar -->
<div class="lg:col-span-1">
<div class="bg-surface-container-low rounded-full p-8 sticky top-28 border-t-4 border-on-tertiary-container">
<div class="flex items-center justify-between mb-8">
<h2 class="text-xl font-black text-primary flex items-center gap-2">
<span class="material-symbols-outlined text-on-tertiary-container" style="font-variation-settings: 'FILL' 1;">chat_bubble</span>
                                    Inquiries
                                </h2>
<span class="bg-on-tertiary-container text-white text-[10px] px-2 py-1 rounded-full font-bold">4 NEW</span>
</div>
<div class="space-y-4">
<!-- Inquiry 1 -->
<div class="bg-surface-container-lowest p-5 rounded-full hover:shadow-md transition-shadow cursor-pointer">
<div class="flex justify-between items-start mb-1">
<span class="font-bold text-primary text-sm">Marcus Chen</span>
<span class="text-[10px] text-on-surface-variant font-bold">12:45 PM</span>
</div>
<p class="text-xs text-secondary leading-relaxed mb-3">Interested in Apex V8 for the upcoming weekend. Is insurance included?</p>
<div class="flex justify-end">
<button class="text-[10px] uppercase tracking-wider font-extrabold text-on-tertiary-container flex items-center gap-1">
                                            Reply on WhatsApp <span class="material-symbols-outlined text-xs">arrow_forward</span>
</button>
</div>
</div>
<!-- Inquiry 2 -->
<div class="bg-surface-container-lowest p-5 rounded-full hover:shadow-md transition-shadow cursor-pointer border-l-4 border-on-tertiary-container">
<div class="flex justify-between items-start mb-1">
<span class="font-bold text-primary text-sm">Elena Rodriguez</span>
<span class="text-[10px] text-on-surface-variant font-bold">10:20 AM</span>
</div>
<p class="text-xs text-secondary leading-relaxed mb-3">Booking request for Titan GT Explorer. Group of 6, heading to the valley.</p>
<div class="flex justify-end">
<button class="text-[10px] uppercase tracking-wider font-extrabold text-on-tertiary-container flex items-center gap-1">
                                            Reply on WhatsApp <span class="material-symbols-outlined text-xs">arrow_forward</span>
</button>
</div>
</div>
<!-- Inquiry 3 -->
<div class="bg-surface-container-lowest p-5 rounded-full hover:shadow-md transition-shadow cursor-pointer opacity-70">
<div class="flex justify-between items-start mb-1">
<span class="font-bold text-primary text-sm">David Sterling</span>
<span class="text-[10px] text-on-surface-variant font-bold">Yesterday</span>
</div>
<p class="text-xs text-secondary leading-relaxed mb-3">Do you offer airport pick-up for the Nova City E-Drive?</p>
<div class="flex justify-end">
<button class="text-[10px] uppercase tracking-wider font-extrabold text-on-tertiary-container flex items-center gap-1">
                                            Reply on WhatsApp <span class="material-symbols-outlined text-xs">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
<!-- Footer (Shared Component Strategy) -->
<footer class="w-full py-12 mt-auto bg-slate-50 dark:bg-slate-950">
<div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-8 font-['Inter'] text-sm">
<div class="col-span-1">
<div class="font-['Manrope'] font-black text-lg text-[#1B263B] mb-4">Kinetic Gallery</div>
<p class="text-slate-500">© 2024 Kinetic Gallery. Editorial Fleet Excellence.</p>
</div>
<div>
<h4 class="font-bold text-[#1B263B] mb-4">Quick Links</h4>
<nav class="flex flex-col gap-2">
<a class="text-slate-500 hover:text-[#5b86ff] transition-colors" href="#">Fleet Support</a>
<a class="text-slate-500 hover:text-[#5b86ff] transition-colors" href="#">Terms of Service</a>
</nav>
</div>
<div>
<h4 class="font-bold text-[#1B263B] mb-4">Operations</h4>
<nav class="flex flex-col gap-2">
<a class="text-slate-500 hover:text-[#5b86ff] transition-colors" href="#">Privacy Policy</a>
<a class="text-slate-500 hover:text-[#5b86ff] transition-colors" href="#">Contact</a>
</nav>
</div>
<div>
<h4 class="font-bold text-[#1B263B] mb-4">System Status</h4>
<div class="flex items-center gap-2 text-slate-500">
<div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    All nodes operational
                </div>
</div>
</div>
</footer>
</body></html>

<!-- Landing Page (Simplified) -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-background": "#021d33",
                    "secondary": "#545e76",
                    "tertiary": "#250900",
                    "on-tertiary-fixed-variant": "#7a3000",
                    "primary-fixed-dim": "#b4c5ff",
                    "inverse-surface": "#1a324a",
                    "surface-container-lowest": "#ffffff",
                    "error": "#ba1a1a",
                    "on-surface-variant": "#45474d",
                    "primary": "#000e35",
                    "on-error": "#ffffff",
                    "tertiary-fixed-dim": "#ffb693",
                    "on-secondary-fixed": "#101b30",
                    "on-primary": "#ffffff",
                    "surface-tint": "#0052dc",
                    "background": "#f8f9ff",
                    "tertiary-container": "#461800",
                    "secondary-container": "#d7e2ff",
                    "primary-fixed": "#dbe1ff",
                    "on-secondary-container": "#5a647c",
                    "outline-variant": "#c5c6cd",
                    "surface-variant": "#d0e4ff",
                    "secondary-fixed": "#d7e2ff",
                    "inverse-on-surface": "#e9f1ff",
                    "outline": "#75777d",
                    "on-surface": "#021d33",
                    "on-tertiary": "#ffffff",
                    "on-primary-container": "#5b86ff",
                    "surface-container": "#e4efff",
                    "on-error-container": "#93000a",
                    "surface-dim": "#c5dcfb",
                    "surface-bright": "#f8f9ff",
                    "on-tertiary-container": "#ec6300",
                    "on-primary-fixed-variant": "#003ea8",
                    "secondary-fixed-dim": "#bbc6e2",
                    "on-secondary-fixed-variant": "#3c475d",
                    "inverse-primary": "#b4c5ff",
                    "surface-container-highest": "#d0e4ff",
                    "surface-container-low": "#eef4ff",
                    "on-primary-fixed": "#00174b",
                    "surface": "#f8f9ff",
                    "on-secondary": "#ffffff",
                    "primary-container": "#002062",
                    "on-tertiary-fixed": "#351000",
                    "surface-container-high": "#dae9ff",
                    "error-container": "#ffdad6",
                    "tertiary-fixed": "#ffdbcc"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "fontFamily": {
                    "headline": ["Manrope"],
                    "body": ["Inter"],
                    "label": ["Inter"]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .editorial-gradient {
            background: linear-gradient(45deg, #000e35 0%, #5b86ff 100%);
        }
    </style>
</head>
<body class="bg-background text-on-background font-body">
<!-- TopNavBar -->
<header class="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-md shadow-sm">
<nav class="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
<div class="text-2xl font-black text-[#1B263B] uppercase tracking-tighter font-headline">
                Kinetic Gallery
            </div>
<div class="hidden md:flex items-center gap-8">
<a class="font-headline font-bold tracking-tight text-[#1B263B] border-b-2 border-[#1B263B] pb-1" href="#">Home</a>
<a class="font-headline font-bold tracking-tight text-slate-500 hover:text-[#1B263B] transition-colors duration-300 pb-1" href="#">Vehicles</a>
<a class="font-headline font-bold tracking-tight text-slate-500 hover:text-[#1B263B] transition-colors duration-300 pb-1" href="#">Admin</a>
</div>
<div class="flex items-center gap-6">
<div class="hidden lg:flex items-center bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant/15">
<span class="material-symbols-outlined text-slate-500 text-xl">search</span>
<input class="bg-transparent border-none focus:ring-0 text-sm w-32 font-medium" placeholder="Search fleet..." type="text"/>
</div>
</div>
</nav>
</header>
<main class="pt-20">
<!-- Hero Section: Editorial Fluidity -->
<section class="relative h-[870px] flex items-center overflow-hidden bg-surface">
<div class="absolute inset-0 z-0">
<img alt="" class="w-full h-full object-cover" data-alt="sleek modern black sports car parked on a coastal road at twilight with deep blue sky and city lights in distance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI6UXLq_aRix9cFWqcJeOtvgDJ-edb1rGApTnEWiXaXxye3zlG0KGrjorOyK50mYPxc-F_7xKVRD5NQkursybzHk98y25t9sO90Gby4SE__1JX2K_f5RzE5Z2KTbZMIEkjWbXsHk_Tuu7zOYRv_GXhX9tnOfWKc29xyYzb7pHlb6I2cUdqzjnrCPmlwc9DNWBIsRwj5xK9GPY9xvmgIVq7BqME_yUXpa9dutfit_h0UlgA9qsEojW5Prk0hkArYbw3SG3JJwclSTs"/>
<div class="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
</div>
<div class="relative z-10 max-w-7xl mx-auto px-8 w-full">
<div class="max-w-2xl">
<h1 class="font-headline text-display-lg text-[4rem] leading-[1.1] font-extrabold tracking-tighter text-primary mb-6">
                        The Art of <br/><span class="text-on-primary-container">Velocity.</span>
</h1>
<p class="text-xl text-secondary mb-10 max-w-lg leading-relaxed">
                        Curated fleet excellence. Experience the world's most sophisticated vehicles through our bespoke rental gallery.
                    </p>
<div class="flex gap-4">
<button class="editorial-gradient text-on-primary px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
                            Rent Now
                        </button>
<button class="bg-surface-container-high text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-container-highest transition-colors">
                            View Gallery
                        </button>
</div>
</div>
</div>
<!-- Floating Search Tray -->
<div class="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-5xl px-8">
<div class="bg-surface-container-highest/60 backdrop-blur-3xl rounded-full p-2 flex flex-col md:flex-row items-center gap-2 shadow-2xl">
<div class="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
<div class="bg-surface-container-lowest rounded-full px-6 py-3 flex flex-col">
<span class="text-[10px] uppercase font-bold tracking-widest text-slate-400">Location</span>
<input class="bg-transparent border-none p-0 focus:ring-0 font-semibold text-primary" placeholder="Where to?" type="text"/>
</div>
<div class="bg-surface-container-lowest rounded-full px-6 py-3 flex flex-col">
<span class="text-[10px] uppercase font-bold tracking-widest text-slate-400">Pickup Date</span>
<input class="bg-transparent border-none p-0 focus:ring-0 font-semibold text-primary" placeholder="Select date" type="text"/>
</div>
<div class="bg-surface-container-lowest rounded-full px-6 py-3 flex flex-col">
<span class="text-[10px] uppercase font-bold tracking-widest text-slate-400">Vehicle Type</span>
<select class="bg-transparent border-none p-0 focus:ring-0 font-semibold text-primary appearance-none">
<option>All Categories</option>
<option>Sport Luxury</option>
<option>Executive SUV</option>
<option>Electric Fleet</option>
</select>
</div>
</div>
<button class="bg-on-tertiary-container text-white w-full md:w-auto px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2">
<span class="material-symbols-outlined">explore</span>
                        Search
                    </button>
</div>
</div>
</section>
<!-- Featured Vehicles: Bento Grid -->
<section class="py-24 bg-background">
<div class="max-w-7xl mx-auto px-8">
<div class="flex justify-between items-end mb-16">
<div>
<h2 class="font-headline text-4xl font-extrabold tracking-tight text-primary">Featured Selection</h2>
<p class="text-secondary mt-2">Curated for performance and presence.</p>
</div>
<div class="flex gap-2">
<button class="p-3 rounded-full bg-surface-container-low text-primary hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined">west</span>
</button>
<button class="p-3 rounded-full bg-surface-container-low text-primary hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined">east</span>
</button>
</div>
</div>
<div class="grid grid-cols-12 gap-8">
<!-- High-End Car Card -->
<div class="col-span-12 md:col-span-7 group">
<div class="bg-surface-container-lowest rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl">
<div class="aspect-[16/8] relative overflow-hidden">
<img alt="" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="side view of a silver electric luxury sedan in a minimalist white studio with dramatic lighting shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHbX8dZ_GLLQDM1uQqlzARU4LvxF-4MsJWLBY7-GM_S46_Adu-19MUVmbTHt3-8Z3LLqoXxZxetKYlu9rLpumF0osBUZuWvLQIP2Wjo839n_ef7Qi57squsFyhGXNSjo3wxL7neOCU7dccsXsLjLOa0XhQuB7r8uw0EXctB8IYREseK3krN0Vbrp4ansoyXdmXuRei8REBoHQaR0nCu5ehdPHl4BM890BIRYiVL1HDhzgaTErPH-CptbY-kPjbg9Q9-u6t0Vt-9Ko"/>
<div class="absolute top-6 right-8 bg-on-tertiary-container text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Available Now</div>
</div>
<div class="p-10 flex justify-between items-start">
<div>
<h3 class="font-headline text-3xl font-extrabold text-primary">Aura Grand Touring</h3>
<div class="flex gap-4 mt-2">
<span class="text-sm font-medium text-slate-400 flex items-center gap-1"><span class="material-symbols-outlined text-sm">bolt</span> Electric</span>
<span class="text-sm font-medium text-slate-400 flex items-center gap-1"><span class="material-symbols-outlined text-sm">settings</span> Automatic</span>
</div>
</div>
<div class="text-right">
<span class="block font-headline text-3xl font-extrabold text-primary">$280</span>
<span class="text-xs font-bold uppercase tracking-widest text-slate-400">per day</span>
</div>
</div>
</div>
</div>
<!-- Side Grid Items -->
<div class="col-span-12 md:col-span-5 flex flex-col gap-8">
<div class="bg-surface-container-low rounded-full p-8 flex items-center gap-6 group hover:bg-surface-container-high transition-colors">
<div class="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 bg-surface-dim">
<img alt="" class="w-full h-full object-cover group-hover:scale-110 transition-transform" data-alt="close up of a vintage custom black cafe racer motorcycle with chrome accents on a city street" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2lQHjHmSsbP9f7pD3nJfIpccnNobfFwIWAAGCYd-JBKe1VtP5eEG-l4CmBguf_HaPNAI2MdZmgHqGPF4z9m8US_qkfmteeF3nDYsvY67xkxSQuuD5Hi8OqsMxqx7HjniRe6rjU8TwE7QeU00kjdrB_lp_uC-TbrH-87TiSEZlqYinu2CnFV2AShjg5Xke_Oq2YUgqU2sJwKYr0UU_QG7jRCbyVncV-kX1D-CjF1821Z0fdBnBdbkbGkAGUXtUrBg5mriAOcOFmns"/>
</div>
<div class="flex-1">
<h4 class="font-headline font-extrabold text-xl text-primary">Heritage 1200</h4>
<p class="text-sm text-secondary">Classic Cruiser</p>
<div class="mt-4 flex justify-between items-center">
<span class="font-bold text-primary">$85<span class="text-[10px] text-slate-400">/day</span></span>
<button class="text-primary-container font-bold text-sm underline underline-offset-4">Details</button>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-full p-8 flex items-center gap-6 group hover:bg-surface-container-high transition-colors">
<div class="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 bg-surface-dim">
<img alt="" class="w-full h-full object-cover group-hover:scale-110 transition-transform" data-alt="front profile of a rugged dark green 4x4 expedition vehicle in a misty forest setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7eJ9dn8wJRJOVRDWJEPXdD26zBaT28iAtQOzE6ml5rAxF_V74812PPsJUAdyGakrLMQ4IOCLo-6cqhkk_xZQK3zfws6B9w6B4J0y70Lz9yl0vWSNo7urZIly08Dqkdge-rUf8oB5j47wdqUd8UdbZfOJWbFAmWJuWHdiLCid2fZc3pEs0bzufboFKfxi0zc7cSCJDNK2Wg9l0_VuG9uW4eZfrm7zoATmF0nlS7BFSZyPpnSHhvKqW_7ItZHXYJkaSlG5Wbyo6PWc"/>
</div>
<div class="flex-1">
<h4 class="font-headline font-extrabold text-xl text-primary">Nomad Expedition</h4>
<p class="text-sm text-secondary">Off-road Elite</p>
<div class="mt-4 flex justify-between items-center">
<span class="font-bold text-primary">$195<span class="text-[10px] text-slate-400">/day</span></span>
<button class="text-primary-container font-bold text-sm underline underline-offset-4">Details</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Categories: Tonal Layering -->
<section class="py-24 bg-surface-container-low">
<div class="max-w-7xl mx-auto px-8">
<div class="grid grid-cols-1 md:grid-cols-4 gap-6">
<div class="bg-surface-container-lowest p-8 rounded-full flex flex-col items-center text-center group hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
<div class="w-16 h-16 rounded-full editorial-gradient flex items-center justify-center text-white mb-4 group-hover:bg-white group-hover:text-primary">
<span class="material-symbols-outlined text-3xl">directions_car</span>
</div>
<h5 class="font-headline font-extrabold text-lg">Luxury Sedans</h5>
<p class="text-sm opacity-60 mt-2">The boardroom on wheels.</p>
</div>
<div class="bg-surface-container-lowest p-8 rounded-full flex flex-col items-center text-center group hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
<div class="w-16 h-16 rounded-full editorial-gradient flex items-center justify-center text-white mb-4 group-hover:bg-white group-hover:text-primary">
<span class="material-symbols-outlined text-3xl">two_wheeler</span>
</div>
<h5 class="font-headline font-extrabold text-lg">Sport Bikes</h5>
<p class="text-sm opacity-60 mt-2">Precision at every lean.</p>
</div>
<div class="bg-surface-container-lowest p-8 rounded-full flex flex-col items-center text-center group hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
<div class="w-16 h-16 rounded-full editorial-gradient flex items-center justify-center text-white mb-4 group-hover:bg-white group-hover:text-primary">
<span class="material-symbols-outlined text-3xl">electric_car</span>
</div>
<h5 class="font-headline font-extrabold text-lg">Eco Performance</h5>
<p class="text-sm opacity-60 mt-2">Silent, sustainable power.</p>
</div>
<div class="bg-surface-container-lowest p-8 rounded-full flex flex-col items-center text-center group hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
<div class="w-16 h-16 rounded-full editorial-gradient flex items-center justify-center text-white mb-4 group-hover:bg-white group-hover:text-primary">
<span class="material-symbols-outlined text-3xl">minor_crash</span>
</div>
<h5 class="font-headline font-extrabold text-lg">Exotic Fleet</h5>
<p class="text-sm opacity-60 mt-2">Uncompromising speed.</p>
</div>
</div>
</div>
</section>
<!-- Dynamic CTA -->
<section class="py-24">
<div class="max-w-7xl mx-auto px-8">
<div class="relative editorial-gradient rounded-full p-16 overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-2xl">
<div class="relative z-10">
<h2 class="text-white font-headline text-5xl font-extrabold tracking-tighter max-w-md">Ready to Command the Road?</h2>
<p class="text-on-primary-container/80 text-xl mt-4">Join our elite membership for exclusive access.</p>
</div>
<div class="relative z-10 mt-10 md:mt-0">
<button class="bg-white text-primary px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform active:scale-95 shadow-xl">
                            Get Access
                        </button>
</div>
<!-- Decorative Element -->
<div class="absolute -right-20 -bottom-20 w-96 h-96 bg-on-primary-container/20 rounded-full blur-3xl"></div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full py-12 mt-auto bg-slate-50 dark:bg-slate-950">
<div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-8">
<div class="flex flex-col gap-4">
<div class="font-['Manrope'] font-black text-lg text-[#1B263B]">Kinetic Gallery</div>
<p class="text-slate-500 text-sm leading-relaxed">Defining the next era of vehicle rental with a focus on curated performance and editorial luxury.</p>
</div>
<div class="flex flex-col gap-4">
<div class="text-[#1B263B] font-semibold text-sm uppercase tracking-widest">Quick Links</div>
<ul class="flex flex-col gap-2">
<li><a class="text-slate-500 hover:text-[#5b86ff] transition-colors text-sm" href="#">Vehicles</a></li>
<li><a class="text-slate-500 hover:text-[#5b86ff] transition-colors text-sm" href="#">Experience</a></li>
<li><a class="text-slate-500 hover:text-[#5b86ff] transition-colors text-sm" href="#">Pricing</a></li>
</ul>
</div>
<div class="flex flex-col gap-4">
<div class="text-[#1B263B] font-semibold text-sm uppercase tracking-widest">Support</div>
<ul class="flex flex-col gap-2">
<li><a class="text-slate-500 hover:text-[#5b86ff] transition-colors text-sm" href="#">Contact</a></li>
<li><a class="text-slate-500 hover:text-[#5b86ff] transition-colors text-sm" href="#">Fleet Support</a></li>
<li><a class="text-slate-500 hover:text-[#5b86ff] transition-colors text-sm" href="#">Terms of Service</a></li>
</ul>
</div>
<div class="flex flex-col gap-4">
<div class="text-[#1B263B] font-semibold text-sm uppercase tracking-widest">Newsletter</div>
<div class="flex">
<input class="bg-white border-none rounded-l-full px-4 text-sm w-full focus:ring-0" placeholder="Email" type="email"/>
<button class="editorial-gradient text-white px-4 py-2 rounded-r-full">
<span class="material-symbols-outlined">send</span>
</button>
</div>
</div>
</div>
<div class="max-w-7xl mx-auto px-8 mt-12 pt-8 border-t border-slate-200">
<p class="text-slate-500 text-sm text-center">© 2024 Kinetic Gallery. Editorial Fleet Excellence.</p>
</div>
</footer>
</body></html>

<!-- Vehicle Listing (Simplified) -->
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-background": "#021d33",
                    "secondary": "#545e76",
                    "tertiary": "#250900",
                    "on-tertiary-fixed-variant": "#7a3000",
                    "primary-fixed-dim": "#b4c5ff",
                    "inverse-surface": "#1a324a",
                    "surface-container-lowest": "#ffffff",
                    "error": "#ba1a1a",
                    "on-surface-variant": "#45474d",
                    "primary": "#000e35",
                    "on-error": "#ffffff",
                    "tertiary-fixed-dim": "#ffb693",
                    "on-secondary-fixed": "#101b30",
                    "on-primary": "#ffffff",
                    "surface-tint": "#0052dc",
                    "background": "#f8f9ff",
                    "tertiary-container": "#461800",
                    "secondary-container": "#d7e2ff",
                    "primary-fixed": "#dbe1ff",
                    "on-secondary-container": "#5a647c",
                    "outline-variant": "#c5c6cd",
                    "surface-variant": "#d0e4ff",
                    "secondary-fixed": "#d7e2ff",
                    "inverse-on-surface": "#e9f1ff",
                    "outline": "#75777d",
                    "on-surface": "#021d33",
                    "on-tertiary": "#ffffff",
                    "on-primary-container": "#5b86ff",
                    "surface-container": "#e4efff",
                    "on-error-container": "#93000a",
                    "surface-dim": "#c5dcfb",
                    "surface-bright": "#f8f9ff",
                    "on-tertiary-container": "#ec6300",
                    "on-primary-fixed-variant": "#003ea8",
                    "secondary-fixed-dim": "#bbc6e2",
                    "on-secondary-fixed-variant": "#3c475d",
                    "inverse-primary": "#b4c5ff",
                    "surface-container-highest": "#d0e4ff",
                    "surface-container-low": "#eef4ff",
                    "on-primary-fixed": "#00174b",
                    "surface": "#f8f9ff",
                    "on-secondary": "#ffffff",
                    "primary-container": "#002062",
                    "on-tertiary-fixed": "#351000",
                    "surface-container-high": "#dae9ff",
                    "error-container": "#ffdad6",
                    "tertiary-fixed": "#ffdbcc"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "fontFamily": {
                    "headline": ["Manrope"],
                    "body": ["Inter"],
                    "label": ["Inter"]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .editorial-shadow {
            box-shadow: 0 20px 40px rgba(2, 29, 51, 0.06);
        }
        .cta-gradient {
            background: linear-gradient(45deg, #000e35, #5b86ff);
        }
    </style>
</head>
<body class="bg-background text-on-background font-body selection:bg-on-primary-container selection:text-white">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-md shadow-sm">
<div class="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
<div class="text-2xl font-black text-[#1B263B] uppercase tracking-tighter font-headline">
                Kinetic Gallery
            </div>
<div class="hidden md:flex items-center space-x-8">
<a class="font-headline font-bold tracking-tight text-slate-500 hover:text-[#1B263B] transition-colors duration-300 pb-1" href="#">Home</a>
<a class="font-headline font-bold tracking-tight text-[#1B263B] border-b-2 border-[#1B263B] pb-1" href="#">Vehicles</a>
<a class="font-headline font-bold tracking-tight text-slate-500 hover:text-[#1B263B] transition-colors duration-300 pb-1" href="#">Admin</a>
</div>
<div class="flex items-center gap-6">
<div class="hidden lg:flex items-center bg-surface-container rounded-full px-4 py-2 gap-2">
<span class="material-symbols-outlined text-outline">search</span>
<input class="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-outline" placeholder="Search fleet..." type="text"/>
</div>
</div>
</div>
</nav>
<main class="pt-28 pb-20 max-w-7xl mx-auto px-8">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<!-- Sidebar Filters -->
<aside class="lg:col-span-3 space-y-10">
<div>
<h1 class="text-4xl font-headline font-extrabold tracking-tighter mb-2">Vanguard Drive</h1>
<p class="text-on-surface-variant text-sm font-medium opacity-60">Curation of Exceptional Engineering.</p>
</div>
<div class="space-y-8">
<!-- Type Filter -->
<section>
<h3 class="text-label font-bold text-xs uppercase tracking-widest text-outline mb-4">Vehicle Type</h3>
<div class="flex flex-wrap gap-2">
<button class="px-5 py-2 rounded-full bg-primary text-on-primary text-sm font-semibold transition-all">Mobil</button>
<button class="px-5 py-2 rounded-full bg-secondary-container text-on-secondary-container text-sm font-semibold hover:bg-surface-container-highest transition-all">Motor</button>
<button class="px-5 py-2 rounded-full bg-secondary-container text-on-secondary-container text-sm font-semibold hover:bg-surface-container-highest transition-all">Electric</button>
</div>
</section>
<!-- Price Range -->
<section>
<h3 class="text-label font-bold text-xs uppercase tracking-widest text-outline mb-4">Price Range (Daily)</h3>
<div class="space-y-4">
<input class="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-on-primary-container" type="range"/>
<div class="flex justify-between text-sm font-bold font-headline">
<span>$50</span>
<span>$1,500+</span>
</div>
</div>
</section>
<!-- Quick Search -->
<section class="lg:hidden">
<h3 class="text-label font-bold text-xs uppercase tracking-widest text-outline mb-4">Search</h3>
<div class="relative">
<input class="w-full bg-surface-container-low border-none rounded-xl py-4 pl-4 pr-12 focus:ring-2 focus:ring-on-primary-container transition-all" placeholder="Model or brand..." type="text"/>
<span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">search</span>
</div>
</section>
</div>
</aside>
<!-- Vehicle Listing Grid -->
<div class="lg:col-span-9">
<div class="flex justify-between items-end mb-10">
<h2 class="text-2xl font-headline font-extrabold tracking-tight">Available Fleet <span class="text-on-primary-container ml-2 text-lg font-medium">(24)</span></h2>
<div class="flex items-center gap-2 text-sm font-bold text-outline">
<span>Sort by:</span>
<select class="bg-transparent border-none focus:ring-0 text-on-background font-bold p-0 cursor-pointer">
<option>Premium First</option>
<option>Price Low-High</option>
<option>Performance</option>
</select>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
<!-- Vehicle Card 1 -->
<div class="group">
<div class="relative aspect-[16/9] bg-surface-dim rounded-xl overflow-hidden editorial-shadow mb-6">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="luxury charcoal grey sports car parked in a minimalist concrete gallery with soft dramatic top lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ2vcFl0Jy-iV7Mm-tHx_QM8BzwJDaAC1E7S92gPB_rXpd1mPuGN33_oG3E3vERLnuepYjyR4HVEdwALIrS6giw-eftbeQ8R3g-Uf3vk8jtgb0i-9Jc_RiX3TMXfqAg0QNjVdrN_3LQ0iQ-7rLJ5bQiD9xWtXJryseeaAMkIsE3LKJezM-pbXHbm4fGz0vlZDEex4-rXRu0jNkpy-Eo2oFtP3XWWjCqbC50csdpzoVQTg7tLCtP7Nrbni1NXI6qWHl6f8VWoYVC3s"/>
<div class="absolute top-4 left-4">
<span class="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-primary">Limited Edition</span>
</div>
</div>
<div class="flex justify-between items-start">
<div>
<h3 class="text-2xl font-headline font-extrabold tracking-tight group-hover:text-on-primary-container transition-colors">Vanguard S-Alpha</h3>
<p class="text-label-md text-on-surface-variant opacity-60 font-medium">6.0L V12 • Automatic • All-Wheel Drive</p>
</div>
<div class="text-right">
<p class="text-2xl font-headline font-extrabold tracking-tighter">$850</p>
<p class="text-[10px] font-bold uppercase tracking-widest text-outline">Per Day</p>
</div>
</div>
<button class="mt-6 w-full cta-gradient text-white py-4 rounded-xl font-headline font-extrabold tracking-tight active:scale-[0.98] transition-all">View Details</button>
</div>
<!-- Vehicle Card 2 -->
<div class="group">
<div class="relative aspect-[16/9] bg-surface-dim rounded-xl overflow-hidden editorial-shadow mb-6">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="sleek modern black sedan cruising through a sunset mountain road with warm orange highlights on the body" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDda07jNr0vs6becfnteKONLya-1x51qoZZ959jyADvXKCpAoOvSZElnxCRmqLlEnjGPZuSRpRd8rp1pcNW4cHKobAg3aHyipMdkGRvAKqbEfU9slv9EF3osE_NWpR3Mw0fXhgsD4uXiObqLXQaUqGE9vgeGhbPC_E21S8O-K89iYZEuVmUA4HILpnSmzovPrc8AT6OYrz7vrqphTbr7W-O5OXC7Dn_EsObC049AeikhS1Tq3bnKKUh3h4K2duHQWPCKm3sOxlHN9k"/>
</div>
<div class="flex justify-between items-start">
<div>
<h3 class="text-2xl font-headline font-extrabold tracking-tight group-hover:text-on-primary-container transition-colors">Executive M-Series</h3>
<p class="text-label-md text-on-surface-variant opacity-60 font-medium">Hybrid • Smart Assist • Pure Comfort</p>
</div>
<div class="text-right">
<p class="text-2xl font-headline font-extrabold tracking-tighter">$420</p>
<p class="text-[10px] font-bold uppercase tracking-widest text-outline">Per Day</p>
</div>
</div>
<button class="mt-6 w-full bg-surface-container-high text-on-primary-fixed-variant py-4 rounded-xl font-headline font-extrabold tracking-tight hover:bg-surface-container-highest active:scale-[0.98] transition-all">View Details</button>
</div>
<!-- Vehicle Card 3 -->
<div class="group">
<div class="relative aspect-[16/9] bg-surface-dim rounded-xl overflow-hidden editorial-shadow mb-6">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="high performance orange sport motorcycle side view in a studio with clean soft box lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvmKhXS7Ojg0bDSqXymRnL-KjS4iAoLel-trtSsw4e2Nps77W3J_bMKPjPtbNH3NBQvc_tbj8aLzkcM3Ea1EWquFH_xD8Wa3di5YCPCXK72bUMOGtolu5iH85Y97Ot3e1swUppe7o15pS-RU7LrwRe-P6hjYXjwGPv9sTcpgOAp_bz1qBiHTSwAThFRrHMGnGYQOj5vjNQ8GDLQFOWnmr9kVksWzeLpLf64XuE48XIU3UrBUYG94V_vzQqrXij6s4nYwLe8mk60_0"/>
<div class="absolute top-4 left-4">
<span class="bg-on-tertiary-container text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Motor</span>
</div>
</div>
<div class="flex justify-between items-start">
<div>
<h3 class="text-2xl font-headline font-extrabold tracking-tight group-hover:text-on-primary-container transition-colors">Ignition X-1000</h3>
<p class="text-label-md text-on-surface-variant opacity-60 font-medium">998cc • Manual 6-Speed • Sport</p>
</div>
<div class="text-right">
<p class="text-2xl font-headline font-extrabold tracking-tighter">$180</p>
<p class="text-[10px] font-bold uppercase tracking-widest text-outline">Per Day</p>
</div>
</div>
<button class="mt-6 w-full bg-surface-container-high text-on-primary-fixed-variant py-4 rounded-xl font-headline font-extrabold tracking-tight hover:bg-surface-container-highest active:scale-[0.98] transition-all">View Details</button>
</div>
<!-- Vehicle Card 4 -->
<div class="group">
<div class="relative aspect-[16/9] bg-surface-dim rounded-xl overflow-hidden editorial-shadow mb-6">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="large white premium SUV parked on a snowy road with soft morning light and distant pine trees" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhj3OZyX0lMM6ngRnjS-5JpBNgUzaFjy5zWrq1v-IxaYcw-juO3GhpdB7WU87PIbJjfkX679ANvOi-WNSgQBGNI-URfwEzDkE9_RI3f7UklH3bQyw3CSCNxCRmXPO8KSxB0fUc83nMeAfCWHM1u0CflPQ9eaDN7Qd29ciH7Idk6pBjgYAXS4LQpzW5pN-ezNg2ZPsB1v2MnMNHiQodYsbin07XjX14_fHriKtLR_Hj7j2V6jZ1Kvu7EYgOjDZcx3DCpIRMZlVXlf8"/>
</div>
<div class="flex justify-between items-start">
<div>
<h3 class="text-2xl font-headline font-extrabold tracking-tight group-hover:text-on-primary-container transition-colors">Horizon Explorer</h3>
<p class="text-label-md text-on-surface-variant opacity-60 font-medium">V8 Turbo • 7-Seater • Panoramic Roof</p>
</div>
<div class="text-right">
<p class="text-2xl font-headline font-extrabold tracking-tighter">$550</p>
<p class="text-[10px] font-bold uppercase tracking-widest text-outline">Per Day</p>
</div>
</div>
<button class="mt-6 w-full bg-surface-container-high text-on-primary-fixed-variant py-4 rounded-xl font-headline font-extrabold tracking-tight hover:bg-surface-container-highest active:scale-[0.98] transition-all">View Details</button>
</div>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="w-full py-12 mt-auto bg-slate-50 border-t border-slate-200">
<div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-8">
<div class="space-y-4">
<div class="font-['Manrope'] font-black text-lg text-[#1B263B]">Kinetic Gallery</div>
<p class="text-slate-500 text-sm leading-relaxed">The editorial fleet excellence. Redefining the journey through intentional engineering and curated experiences.</p>
</div>
<div class="space-y-4">
<h4 class="font-headline font-bold text-primary text-sm uppercase tracking-widest">Fleet</h4>
<ul class="space-y-2 text-sm text-slate-500 font-body">
<li><a class="hover:text-[#5b86ff] transition-colors" href="#">Luxury Sedans</a></li>
<li><a class="hover:text-[#5b86ff] transition-colors" href="#">Performance Motors</a></li>
<li><a class="hover:text-[#5b86ff] transition-colors" href="#">Electric Selection</a></li>
</ul>
</div>
<div class="space-y-4">
<h4 class="font-headline font-bold text-primary text-sm uppercase tracking-widest">Company</h4>
<ul class="space-y-2 text-sm text-slate-500 font-body">
<li><a class="hover:text-[#5b86ff] transition-colors" href="#">Contact</a></li>
<li><a class="hover:text-[#5b86ff] transition-colors" href="#">Terms of Service</a></li>
<li><a class="hover:text-[#5b86ff] transition-colors" href="#">Privacy Policy</a></li>
<li><a class="hover:text-[#5b86ff] transition-colors" href="#">Fleet Support</a></li>
</ul>
</div>
<div class="space-y-4">
<h4 class="font-headline font-bold text-primary text-sm uppercase tracking-widest">Newsletter</h4>
<div class="flex gap-2">
<input class="bg-white border-slate-200 rounded-lg text-sm w-full focus:ring-on-primary-container focus:border-on-primary-container" placeholder="Email address" type="email"/>
<button class="bg-primary text-white p-2 rounded-lg material-symbols-outlined">arrow_forward</button>
</div>
</div>
</div>
<div class="max-w-7xl mx-auto px-8 mt-12 pt-8 border-t border-slate-200 text-center">
<p class="font-['Inter'] text-sm text-slate-500">© 2024 Kinetic Gallery. Editorial Fleet Excellence.</p>
</div>
</footer>
</body></html>