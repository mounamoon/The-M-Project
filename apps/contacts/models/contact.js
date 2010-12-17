// ==========================================================================
// Project:   The M-Project - Mobile HTML5 Application Framework
// Copyright: (c) 2010 M-Way Solutions GmbH. All rights reserved.
// Creator:   Sebastian
// Date:      25.11.2010
// License:   Dual licensed under the MIT or GPL Version 2 licenses.
//            http://github.com/mwaylabs/The-M-Project/blob/master/MIT-LICENSE
//            http://github.com/mwaylabs/The-M-Project/blob/master/GPL-LICENSE
// ==========================================================================

Contacts.Contact = M.Model.create({
    __name__: 'Contact', // is generated by generator

    firstName: M.Model.attr('String',{
        isRequired:YES
    }),

    lastName: M.Model.attr('String', {
        isRequired:YES
    }),

    /* Model Reference */
    address: M.Model.hasOne('Address', {
        isRequired:NO
    })

}, M.WebSqlProvider.configure({
    dbName: 'contacts_db'
}));