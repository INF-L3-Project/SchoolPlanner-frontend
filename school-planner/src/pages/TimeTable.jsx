import { useState } from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function TimeTable() {
	const [openFilter, setOpenFilter] = useState(false);

	const handleOpenFilter = () => {
		setOpenFilter(true);
	};

	const handleCloseFilter = () => {
		setOpenFilter(false);
	};

	return (
		<Page title="Dashboard: Levels">
			<Container>
				<Typography variant="h4" sx={{ mb: 5 }}>
					Emploi de temps
				</Typography>

				<Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
					<Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
						
					</Stack>
				</Stack>

			</Container>
		</Page>
	);
}
