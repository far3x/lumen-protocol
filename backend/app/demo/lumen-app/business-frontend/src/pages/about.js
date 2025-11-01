export function renderAboutPage() {
    return `
    <div class="bg-background">
        <!-- HERO -->
        <section class="py-24 md:py-32 text-center">
            <div class="container mx-auto px-6">
                <h1 class="text-5xl md:text-7xl font-bold text-text-headings tracking-tighter leading-tight">
                    Building the Data Layer for the AI Revolution
                </h1>
                <p class="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-text-body">
                    Lumen is not just a data marketplace; we are core infrastructure. Our mission is to solve the AI industry's data crisis by building a secure, ethical, and sustainable economy for the world's most valuable, untapped asset: proprietary source code.
                </p>
            </div>
        </section>

<!-- PHILOSOPHY SECTION -->
        <section class="py-24 md:py-32 bg-background">
            <div class="container mx-auto px-6">
                 <div class="text-center max-w-3xl mx-auto">
                    <p class="section-label">OUR PHILOSOPHY</p>
                    <h2 class="text-4xl md:text-5xl font-bold text-text-headings">Engineered for a New Economy</h2>
                    <p class="mt-6 text-lg text-text-body">Our approach is shaped by a set of core engineering and economic principles.</p>
                </div>
                <div class="mt-20 grid md:grid-cols-3 gap-8 text-left">
                    <div class="bg-surface p-8 rounded-lg">
                        <h3 class="font-bold text-xl text-text-headings">Signal Over Noise</h3>
                        <p class="mt-2 text-text-muted">We believe the future of AI will be won by those who can access the highest quality data, not the largest quantity. Our valuation engine is designed to identify and reward true signal.</p>
                    </div>
                     <div class="bg-surface p-8 rounded-lg">
                        <h3 class="font-bold text-xl text-text-headings">Security by Design</h3>
                        <p class="mt-2 text-text-muted">Trust is not an afterthought; it is an architectural decision. Our local-first anonymization process ensures that contributor data is protected by default, not by promise.</p>
                    </div>
                     <div class="bg-surface p-8 rounded-lg">
                        <h3 class="font-bold text-xl text-text-headings">Sustainable Economics</h3>
                        <p class="mt-2 text-text-muted">A healthy data economy must be self-sustaining. Our model uses real revenue from enterprise clients to fund developer rewards, creating a powerful, long-term flywheel for growth.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    `;
}