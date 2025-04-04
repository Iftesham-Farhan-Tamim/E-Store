import Container from '@/components/Container';
import { getCategories } from '@/library';
import React from 'react'

export default function StoreLayout({ children }) {
    return (
        <Container className="grid grid-cols-5 gap-3">
            <CategoryListing />
            {children}
        </Container>
    )
}

const CategoryListing = async () => {
    const data = await getCategories();

    return (
        <div>
            <div className="text-xl my-3 text-center">Categories</div>
            <ul>
                {data.map((d, i) => (
                    <li className="p-2 border my-2" key={i}>
                        {d.toUpperCase()}
                    </li>
                ))}
            </ul>
        </div>
    );
}
