package com.gusrylmubarok.springbootbookseller.service;

import com.gusrylmubarok.springbootbookseller.model.User;

public interface IAuthenticationService
{
    User signInAndReturnJWT(User signInRequest);
}
