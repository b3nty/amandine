if Rails.env.development?

  ActionMailer::Base.smtp_settings = {
    :address              => "smtp.gmail.com",
    :port                 => 587,
    :domain               => "gmail.com",
    :user_name            => Figaro.env.google_email,
    :password             => Figaro.env.google_password,
    :authentication       => "plain",
    :enable_starttls_auto => true
  }

end

if ['production'].include?(Rails.env)

  ActionMailer::Base.smtp_settings = {
    :port           => '587',
    :address        => "smtp.mailgun.org",
    :user_name      => Figaro.env.mailgun_login,
    :password       => Figaro.env.mailgun_password,
    :domain         => 'h-training.fr',
    :authentication => :plain
  }

  ActionMailer::Base.delivery_method = :smtp

end
