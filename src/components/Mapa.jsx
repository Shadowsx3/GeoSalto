<Paper
            sx={{
              p: 2,
              height: '70%',
              width: '90%',
              background: '#cfe1b9',
            }}
          >
            <Typography
              variant="h6"
              component="h6"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Categorias
            </Typography>
      <Grid container spacing={0} direction="column"
  justifyContent="space-evenly"
  alignItems="left">
          {Array.from(Array(props.categoryRecords.length).keys()).map((d) => {
          return (
            <Grid item xs>
            <Row index={d}/>
          </Grid>
          )
        }
      )}
      </Grid>
          </Paper>