// Add interactive animations
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.tool-card');

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';

        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Add tilt effect on mouse move
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
    });

    // Animate stats on scroll
    const animateStats = () => {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const finalNumber = stat.textContent;
            let currentNumber = 0;
            const increment = parseInt(finalNumber) / 50;

            const timer = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= parseInt(finalNumber)) {
                    stat.textContent = finalNumber;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(currentNumber) + (finalNumber.includes('%') ? '%' : finalNumber.includes('K') ? 'K+' : '');
                }
            }, 50);
        });
    };

    // Trigger stats animation
    setTimeout(animateStats, 1000);
});