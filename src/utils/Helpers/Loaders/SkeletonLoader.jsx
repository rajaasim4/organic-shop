import React from 'react'
import ContentLoader from 'react-content-loader'
const SkeletonLoader = (props) => {
    return (
        <div className="border rounded-xl w-[340px] h-[498px]">

            <ContentLoader
                speed={2}
                width={340}
                height={498}
                viewBox="0 0 400 460"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"

                {...props}
            >
                <circle cx="189" cy="123" r="120" />
                <rect x="117" y="280" rx="2" ry="2" width="160" height="10" />
                <rect x="118" y="300" rx="2" ry="2" width="160" height="10" />
                <rect x="120" y="320" rx="0" ry="0" width="168" height="9" />
                <rect x="122" y="340" rx="0" ry="0" width="160" height="9" />
            </ContentLoader>
        </div>
    )
}

export default SkeletonLoader