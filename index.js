/*
 *  Copyright (C) 2016  Mikel KROK (Kenji-getpowered)
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License along
 *  with this program; if not, write to the Free Software Foundation, Inc.,
 *  51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
*/
'use strict'

module.exports = (pluginContext) => {

  // Allows to call the logger (F12 to show it)
  // const logger = pluginContext.logger;

  // Allows to call a shell command
  const shell = pluginContext.shell

  // Step 1 - init
  function startup(){
    // Do nothing
  }

  // Step 2 - search
  function search (query, res) {

    const query_clean = query.trim()

    if (query_clean.length === 0) {
      return "Please enter a direction"
    }

    res.add({
      id: query_clean,
      payload: 'open',
      title: query_clean,
      desc: `Going to ${query_clean} on Google map`
    })
  }

  // Step 3 - execute a command
  function execute (id, payload) {
    if (payload !== 'open') {
      return
    }
    shell.openExternal(`https://www.google.fr/maps/place/${id}`)
  }

    // Step 4 : render html preview by calling this function
  function renderPreview(){
      // Do nothing
  }


  return { search, execute }
}
