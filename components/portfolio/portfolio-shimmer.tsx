export function PortfolioShimmer() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-pulse">
            {/* Column 1 */}
            <div className="space-y-4">
                <div className="aspect-[4/5] bg-neutral-900 rounded-xl w-full" />
                <div className="aspect-[4/3] bg-neutral-900 rounded-xl w-full" />
            </div>

            {/* Column 2 */}
            <div className="space-y-4 hidden sm:block">
                <div className="aspect-[4/3] bg-neutral-900 rounded-xl w-full" />
                <div className="aspect-[3/4] bg-neutral-900 rounded-xl w-full" />
            </div>

            {/* Column 3 */}
            <div className="space-y-4 hidden lg:block">
                <div className="aspect-[3/4] bg-neutral-900 rounded-xl w-full" />
                <div className="aspect-[4/5] bg-neutral-900 rounded-xl w-full" />
            </div>
        </div>
    )
}
