"""empty message

<<<<<<<< HEAD:migrations/versions/cb772c5f121f_.py
Revision ID: cb772c5f121f
Revises: 
Create Date: 2024-08-02 18:06:14.774968
========
Revision ID: badada0184a0
Revises: 
Create Date: 2024-08-02 17:55:58.166801
>>>>>>>> 127ed65779d5d753c96a7f93f6c13e7f25e2d99f:migrations/versions/badada0184a0_.py

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
<<<<<<<< HEAD:migrations/versions/cb772c5f121f_.py
revision = 'cb772c5f121f'
========
revision = 'badada0184a0'
>>>>>>>> 127ed65779d5d753c96a7f93f6c13e7f25e2d99f:migrations/versions/badada0184a0_.py
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('exercise',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('exercise_name', sa.String(length=100), nullable=False),
    sa.Column('description', sa.String(length=255), nullable=False),
    sa.Column('muscle_group', sa.String(length=50), nullable=False),
    sa.Column('video_url', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=255), nullable=False),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('surname', sa.String(length=80), nullable=False),
    sa.Column('username', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('birth_date', sa.Date(), nullable=True),
    sa.Column('gender', sa.Enum('male', 'female', 'none', name='gender_enum'), nullable=True),
    sa.Column('weight', sa.Float(), nullable=True),
    sa.Column('height', sa.Float(), nullable=True),
    sa.Column('registration_date', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('experience_level',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('level_name', sa.String(length=50), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('goal',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('goal_name', sa.String(length=50), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('training_days',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('number_of_days', sa.Integer(), nullable=False),
    sa.Column('days', sa.String(length=100), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('workout',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('routine_name', sa.String(length=50), nullable=False),
    sa.Column('routine_type', sa.String(length=50), nullable=False),
    sa.Column('creation_date', sa.Date(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('routine_activity',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('workout_id', sa.Integer(), nullable=False),
    sa.Column('exercise_id', sa.Integer(), nullable=False),
    sa.Column('date', sa.Date(), nullable=False),
    sa.Column('days_of_the_week', sa.String(length=50), nullable=False),
    sa.Column('sets', sa.Integer(), nullable=False),
    sa.Column('reps', sa.Integer(), nullable=False),
    sa.Column('weight_used', sa.Integer(), nullable=False),
    sa.Column('duration', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['exercise_id'], ['exercise.id'], ),
    sa.ForeignKeyConstraint(['workout_id'], ['workout.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_progress',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('date', sa.Date(), nullable=False),
    sa.Column('weight', sa.Float(), nullable=False),
    sa.Column('goal_id', sa.Integer(), nullable=False),
    sa.Column('experience_level_id', sa.Integer(), nullable=False),
    sa.Column('training_days_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['experience_level_id'], ['experience_level.id'], ),
    sa.ForeignKeyConstraint(['goal_id'], ['goal.id'], ),
    sa.ForeignKeyConstraint(['training_days_id'], ['training_days.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('calorie_log',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('date', sa.Date(), nullable=False),
    sa.Column('routine_calories_burned', sa.Integer(), nullable=False),
    sa.Column('calories_consumed', sa.Integer(), nullable=False),
    sa.Column('calories_balance', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['routine_calories_burned'], ['routine_activity.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('calorie_log')
    op.drop_table('user_progress')
    op.drop_table('routine_activity')
    op.drop_table('workout')
    op.drop_table('training_days')
    op.drop_table('goal')
    op.drop_table('experience_level')
    op.drop_table('user')
    op.drop_table('exercise')
    # ### end Alembic commands ###
