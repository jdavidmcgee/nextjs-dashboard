import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
	title: 'Customers',
};

export default async function CustomersPage(props: {
	searchParams?: Promise<{
		query?: string;
	}>;
}) {
	const searchParams = await props.searchParams;
	const query = searchParams?.query || ''; 
	//const customers = await fetchFilteredCustomers(query); (moved to CustomersTable)

	return (
		<div className="w-full">
			{/* <CustomersTable customers={customers} /> */}
			<CustomersTable query={query} />
		</div>
	);
}
