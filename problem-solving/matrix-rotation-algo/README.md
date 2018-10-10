# Matrix	Layer

# Rotation

You	are	given	a	2D	matrix,	a,	of	dimension	MxN	and	a	positive	integer	R.	You	have	to	rotate	the	matrix	R
times	and	print	the	resultant	matrix.	Rotation	should	be	in	anti-clockwise	direction.

Rotation	of	a	4x5	matrix	is	represented	by	the	following	figure.	Note	that	in	one	rotation,	you	have	to	shift
elements	by	one	step	only	(refer	sample	tests	for	more	clarity).

It	is	guaranteed	that	the	minimum	of	M	and	N	will	be	even.

**Input	Format**
First	line	contains	three	space	separated	integers,	M,	N	and	R,	where	M	is	the	number	of	rows,	N	is	number
of	columns	in	matrix,	and	R	is	the	number	of	times	the	matrix	has	to	be	rotated.	
Then	M	lines	follow,	where	each	line	contains	N	space	separated	positive	integers.	These	M	lines	represent
the	matrix.

**Constraints**
2	<=	M,	N	<=	300	
1	<=	R	<=	
min(M,	N)	%	2	==	0	
1	<=	a	<=	10 ,	where	i	∈	[1..M]	&	j	∈	[1..N]

**Output	Format**
Print	the	rotated	matrix.

## Sample	Input	#

### 4	4	

### 1	2	3	

### 5	6	7	

### 9	10	11	

### 13	14	15	

## Sample	Output	#

```
2	3	4	
1	7	11	
5	6	10	
9	13	14	
```
```
9
```
```
ij^8
```

## Sample	Input	#

## Sample	Output	#

### 4	3	2	

### 1	

### 1	

### 1	

### 1	

## Explanation

- Sample	Input	#
   - 4	4	
   - 1	2	3	
   - 5	6	7	
   - 9	10	11	
   - 13	14	15	
- Sample	Output	#
   - 3	4	8	
   - 2	11	10	
   - 1	7	6	
   - 5	9	13	
- Sample	Input	#
   - 5	4	
   - 1	2	3	
   - 7	8	9	
   - 13	14	15	
   - 19	20	21	
   - 25	26	27	
- Sample	Output	#
   - 28	27	26	
   - 22	9	15	
   - 16	8	21	
   - 10	14	20	
   - 4	3	2	
- Sample	Input	#
   - 2	2	
   - 1	
   - 1	
- Sample	Output	#
   - 1	
   - 1	
   - 	1		2		3		4						2		3		4		 Sample	Case	#00:	Here	is	an	illustration	of	what	happens	when	the	matrix	is	rotated	once.
   - 	5		6		7		8						1		7	11	
   - 	9	10	11	12		->		5		6	10	
   - 13	14	15	16						9	13	14	
   - 	1		2		3		4						2		3		4		8						3		4		8	 Sample	Case	#01:	Here	is	what	happens	when	to	the	matrix	after	two	rotations.
   - 	5		6		7		8						1		7	11	12						2	11	10	
   - 	9	10	11	12		->		5		6	10	16		->		1		7		6	
   - 13	14	15	16						9	13	14	15						5		9	13	


Sample	Case	#02:	Following	are	the	intermediate	states.

```
1		2		3		4						2		3		4	10				3		4	10	16				4	10	16	
7		8		9	10						1		9	15	16				2	15	21	22				3	21	20	
13	14	15	16	->		7		8	21	22	->	1		9	20	28	->	2	15	14	27	->
19	20	21	22				13	14	20	28				7		8	14	27				1		9		8	
25	26	27	28				19	25	26	27				13	19	25	26			7	13	19	
```
```
10	16	22	28				16	22	28	27				22	28	27	26				28	27	26	
	4	20	14	27				10	14		8	26				16		8		9	25				22		9	15	
	3	21		8	26	->		4	20		9	25	->	10	14	15	19	->	16		8	21	
	2	15		9	25					3	21	15	19					4	20	21	13				10	14	20		
	1		7	13	19					2		1		7	13					3		2		1		7					4		3		2		
```
Sample	Case	#03:	As	all	elements	are	same,	any	rotation	will	reflect	the	same	matrix.


