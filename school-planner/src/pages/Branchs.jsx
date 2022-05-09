import { useState } from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function Branchs() {
	const [openFilter, setOpenFilter] = useState(false);

	const handleOpenFilter = () => {
		setOpenFilter(true);
	};

	const handleCloseFilter = () => {
		setOpenFilter(false);
	};

	return (
		<Page title="Dashboard: Branchs">
			<Container>
				<Typography variant="h4" sx={{ mb: 5 }}>
					Filières
				</Typography>

				<Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
					<Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
						
					</Stack>
				</Stack>

			</Container>
		</Page>
	);
}

