import React from 'react'
import ContentLoader from 'react-content-loader'
const SkeletonLoader = (props) => {
    return (
        <div className="border rounded-xl w-[340px] h-[498px]">

            <ContentLoader
                speed={2}
                width={340}
                height={498}
                viewBox="0 0 400 490"
                backgroundColor="#DCDCDC"
                foregroundColor="#f0f0f0"
                {...props}
            >
                <circle cx="200" cy="143" r="140" />
                <rect x="60" y="340" rx="4" ry="4" width="280" height="20" />
                <rect x="60" y="380" rx="4" ry="4" width="280" height="20" />
                <rect x="60" y="420" rx="4" ry="4" width="280" height="20" />
                <rect x="60" y="460" rx="4" ry="4" width="280" height="20" />
            </ContentLoader>
        </div>
    )
}

export default SkeletonLoader