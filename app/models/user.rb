# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  f_name          :string           not null
#  l_name          :string           not null
#  birthday        :string           not null
#

class User < ApplicationRecord
  attr_reader :password
  
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, :f_name, :l_name, :birthday, presence: true
  validates :password, length: { minimum: 5 }, allow_nil: true
  # validates :password, confirmation: true
  # validates :password_confirmation, presence: true
  # validate :password_confirmation_match


  after_initialize :ensure_session_token

  has_many :checkins,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Checkin

  has_many :beers,
    through: :checkins,
    source: :beer

  # def password_confirmation_match
  #   if password.present? && password != password_confirmation
  #     errors.add(:passwords, "must match.")
  #   end
  # end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def generate_unique_session_token
    self.session_token = SecureRandom.urlsafe_base64
    while User.find_by(session_token: self.session_token)
      self.session_token = SecureRandom.urlsafe_base64
    end
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end